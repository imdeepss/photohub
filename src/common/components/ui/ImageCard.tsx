"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { DownloadButton, OpenButton } from "../form";

type ImageType = {
  src: string;
  alt: string;
};
const ImageCard = ({ src, alt }: ImageType) => {
  const imageURLRef = useRef<HTMLImageElement>(null);

  return (
    <div className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg">
      <Image
        src={src}
        alt={alt}
        ref={imageURLRef}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
      {src && (
        <div className="">
          <OpenButton src={src} alt={alt} />
          <DownloadButton src={imageURLRef} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
