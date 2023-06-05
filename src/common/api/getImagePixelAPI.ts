import { ErrorResponse, Photo, createClient } from "pexels";
import { PexelsImageType } from "../type";

const client = createClient(
  "T8sKIBAGwDJsZKgfSSW8SM7eeCOdcPN3jcP2cdzTQwD72JKjM0dxuvCe"
);

const getImagePixelAPI = async (): Promise<PexelsImageType[] | null> => {
  try {
    const response = await client.photos.curated({ per_page: 100 });

    if (!response || "error" in response) {
      throw new Error("Something went wrong");
    }

    const photos: Photo[] = response.photos;

    const formattedPhotos: PexelsImageType[] = photos.map((photo: Photo) => ({
      id: photo.id,
      src: photo.src.original,
      alt: photo.alt ?? "",
    }));

    return formattedPhotos;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};

export default getImagePixelAPI;
