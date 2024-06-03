import { useState } from "react";

export interface UrlVideoProps {
  urlVideo: string;
  fontVideo: string;
}

export default function Video({ urlVideo, fontVideo }: UrlVideoProps) {
  return (
    <div>
      <iframe
        className="w-full h-64 rounded-2xl shadow-2xl"
        // src="https://www.youtube.com/watch?v=02vLjgJx1UA"
        src={`https://www.youtube.com/embed/${urlVideo}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p className="font-light text-[.7rem] text-left leading-none mt-2 opacity-60 text-black">
        {fontVideo}
      </p>
    </div>
  );
}
