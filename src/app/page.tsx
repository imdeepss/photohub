import { ImageGallery, ImageGalleryPexels, } from "@/common/components/ui";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <>
      <Analytics />
      {/* <ImageGallery /> */}
      <ImageGalleryPexels />
    </>
  )
}

export default Home