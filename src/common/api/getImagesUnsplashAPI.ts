interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
}

type SearchInputType = {
  search: string;
};

const getImagesUnsplashAPI = async (
  searchInput: SearchInputType
): Promise<Image[] | null> => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${
        process.env.NEXT_PUBLIC_ACCESS_KEY
      }&count=30&query=${encodeURIComponent(searchInput?.search)}`
    );
    const imageData = await response.json();
    return imageData;
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
};

export default getImagesUnsplashAPI;
