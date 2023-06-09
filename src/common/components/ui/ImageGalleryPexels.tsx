"use client";

import { getImagePixelAPI } from '@/common/api';
import { PexelsImageType } from '@/common/type';
import { InputValueContext } from "@/context/InputValueContext";
import { useContext, useEffect, useState } from "react";
import ImageCard from './ImageCard';
import NoImageFound from "./NoImageFound";

const ImageGalleryPexels = () => {
  const [imageDetails, setImageDetails] = useState<PexelsImageType[] | null>(null);

  const { inputValue } = useContext(InputValueContext);
  const fetchData = async (inputValue: any) => {
    try {
      const details = await getImagePixelAPI(inputValue);
      setImageDetails(details);
    } catch (error) {
      console.error('An error occurred while fetching image details:', error);
      setImageDetails(null);
    }
  };


  useEffect(() => {
    fetchData(inputValue);
  }, [inputValue]);

  if (!imageDetails) {
    return <NoImageFound />;
  }

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, i) =>
    imageDetails.slice(
      i * (imageDetails.length / columns),
      (i + 1) * (imageDetails.length / columns)
    )
  );

  return (
    <section className="px-4 py-10 md:px-20 bg-white dark:bg-black">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columnData.map((column, columnIndex) => (
          <div className="flex flex-col gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <ImageCard
                key={imageIndex}
                src={image?.src}
                alt={image?.alt}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGalleryPexels;
