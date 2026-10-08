'use client';

import { useState } from 'react';

export default function VideoPlayer({ hash, title }: { hash: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1b3a78] to-navy">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="h-12 w-12 animate-spin rounded-full border-4 border-white/80 border-t-transparent" />
        </div>
      )}
      <iframe
        title={title}
        className="absolute inset-0 h-full w-full"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
        src={`https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`}
      />
    </div>
  );
}