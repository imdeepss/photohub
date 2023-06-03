"use client";

import { useEffect, useState } from 'react';
import { getImagePixelAPI, getImagesUnsplashAPI } from '@/common/api';
import ImageCard from './ImageCard';
import { ImageType, SearchInputType } from '@/common/type';

const ImageGalleryBackup = () => {
  const [imageDetails, setImageDetails] = useState<ImageType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await getImagePixelAPI();
        console.log(details)
        // setImageDetails(details);
      } catch (error) {
        console.error('An error occurred while fetching image details:', error);
        setImageDetails(null);
      }
    };

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
    <section className="px-8 py-10 md:px-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columnData.map((column, columnIndex) => (
          <div className="flex flex-col gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <ImageCard
                key={imageIndex}
                src={image?.urls?.regular}
                alt={image?.alt_description ?? 'images'}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGalleryBackup;
