import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'out');
const zipFile = path.join(projectRoot, 'dist.zip');
const publicHtaccess = path.join(projectRoot, 'public', '.htaccess');
const outHtaccess = path.join(outDir, '.htaccess');

console.log('🚀 [Deploy Prep] 1/3 Building Next.js static export...');
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });

console.log('\n🔒 [Deploy Prep] 2/3 Verifying static artifacts and .htaccess...');
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: "out" directory was not generated.');
  process.exit(1);
}

// Guarantee .htaccess is in out/
if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, outHtaccess);
  console.log('✓ Verified out/.htaccess is synchronized from public/.htaccess');
} else {
  console.warn('⚠️ Warning: public/.htaccess not found!');
}

if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

console.log('\n📦 [Deploy Prep] 3/3 Packaging "out" contents into dist.zip...');

const isWindows = process.platform === 'win32';
let success = false;

// Method 1: Native bsdtar (standard on modern Windows 10/11, macOS, and Linux)
try {
  execSync('tar -a -c -f dist.zip -C out .', { cwd: projectRoot, stdio: 'pipe' });
  if (fs.existsSync(zipFile) && fs.statSync(zipFile).size > 1000) {
    success = true;
  }
} catch {
  // Fall through to platform-specific fallbacks
}

// Method 2: PowerShell Compress-Archive on Windows
if (!success && isWindows) {
  try {
    execSync(
      'powershell -NoProfile -Command "Get-ChildItem -Force out | Compress-Archive -DestinationPath dist.zip -Force"',
      { cwd: projectRoot, stdio: 'inherit' }
    );
    if (fs.existsSync(zipFile) && fs.statSync(zipFile).size > 1000) {
      success = true;
    }
  } catch (err) {
    console.error('PowerShell compression error:', err);
  }
}

// Method 3: zip CLI (standard on Linux / macOS / Unix)
if (!success && !isWindows) {
  try {
    execSync('cd out && zip -r -q ../dist.zip .', { cwd: projectRoot, stdio: 'inherit' });
    if (fs.existsSync(zipFile) && fs.statSync(zipFile).size > 1000) {
      success = true;
    }
  } catch (err) {
    console.error('zip CLI compression error:', err);
  }
}

if (!success || !fs.existsSync(zipFile)) {
  console.error('❌ Error: Failed to generate dist.zip.');
  process.exit(1);
}

const stats = fs.statSync(zipFile);
const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`\n🎉 Success! "dist.zip" generated (${sizeMB} MB).`);
console.log('👉 Ready for cPanel File Manager upload: extract dist.zip directly inside public_html/\n');
