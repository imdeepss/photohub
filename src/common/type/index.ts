export type SearchInputType = {
  search: string;
};

export type ImageType = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
};

export type PexelsImageType = {
  id: number;
  src: string;
  alt: string;
};
