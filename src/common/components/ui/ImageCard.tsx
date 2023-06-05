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
    <div className="">
      <div className="relative">
        <Image
          width={500}
          height={500}
          className="h-auto max-w-full rounded-lg bg-grey"
          src={src}
          alt={alt}
          ref={imageURLRef}
        />
        {src &&
          <div className="">
            <OpenButton src={src} alt={alt} />
            <DownloadButton src={imageURLRef} alt={alt} />
          </div>
        }
      </div>
    </div>
  );
};

export default ImageCard;
