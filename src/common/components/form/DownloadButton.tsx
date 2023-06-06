"use client";

import React from "react";
import { DownloadIcon } from "../icons";

type DownloadButtonProps = {
  src: React.RefObject<HTMLImageElement>;
  alt: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ src, alt }) => {
  const handleDownload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageSrc: string,
    alt: string
  ) => {
    e.preventDefault();
    const response = await fetch(src.current?.src as string);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    // Set the Content-Disposition header to force download
    link.setAttribute("download", `${alt}.png`);
    link.setAttribute("Content-Disposition", "attachment; filename=image.png");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      className="absolute bottom-2 right-2 rounded-md bg-grey p-1 shadow-inner"
      onClick={(e) => handleDownload(e, src.current?.src as string, alt)}
    >
      <DownloadIcon />
    </button>
  );
};

export default DownloadButton;
