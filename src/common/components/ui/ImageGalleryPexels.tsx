"use client";

import { getImagePixelAPI } from '@/common/api';
import { PexelsImageType } from '@/common/type';
import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';

const ImageGalleryPexels = () => {
  const [imageDetails, setImageDetails] = useState<PexelsImageType[] | null>(null);

  const fetchData = async () => {
    try {
      const details = await getImagePixelAPI();
      setImageDetails(details);
    } catch (error) {
      console.error('An error occurred while fetching image details:', error);
      setImageDetails(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!imageDetails) {
    return <></>;
  }

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, i) =>
    imageDetails.slice(
      i * (imageDetails.length / columns),
      (i + 1) * (imageDetails.length / columns)
    )
  );

  return (
    <section className="px-8 py-10 md:px-20 bg-white dark:bg-black">
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
