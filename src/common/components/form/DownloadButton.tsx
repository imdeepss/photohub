"use client";

import React, { useState } from "react";
import { DownloadIcon, LoaderIcon } from "../icons";

type DownloadButtonProps = {
  src: React.RefObject<HTMLImageElement>;
  alt: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ src, alt }) => {

  const [loader, setLoader] = useState(false);
  const handleDownload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    src: string,
    alt: string
  ) => {
    e.preventDefault();
    setLoader(true)
    if (alt === "") {
      alt = "image"
    }
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${alt}.png`);
    link.setAttribute("Content-Disposition", "attachment; filename=image.png");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoader(false)
  };

  return (
    <button
      type="button"
      className="absolute bottom-2 right-2 rounded-md bg-grey p-1 shadow-inner"
      onClick={(e) => handleDownload(e, src.current?.src as string, alt)}
    >
      {loader ? <LoaderIcon /> : <DownloadIcon />}
    </button>
  );
};

export default DownloadButton;
