"use client";

import { useEffect, useState } from "react";
import { getImagesUnsplashAPI } from "@/common/api";
import ImageCard from "./ImageCard";
import { ImageType, SearchInputType } from "@/common/type";

const ImageGallery = () => {
  const [imageDetails, setImageDetails] = useState<ImageType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchInput: SearchInputType = { search: "" };
        const details = await getImagesUnsplashAPI(searchInput);
        setImageDetails(details);
      } catch (error) {
        console.error("An error occurred while fetching image details:", error);
        setImageDetails(null);
      }
    };

    fetchData();
  }, []);

  if (!imageDetails) {
    return <></>;
  }

  return (
    <section className="px-4 py-10 md:px-20">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {imageDetails.map(({ id, urls, alt_description }) => (
          <ImageCard
            key={id}
            src={urls?.regular}
            alt={alt_description ?? "images"}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
