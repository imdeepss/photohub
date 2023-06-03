import { ImageGallery, ImageGalleryBackup } from "@/common/components/ui";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <>
      <Analytics />
      <ImageGallery />
      {/* <ImageGalleryBackup /> */}
    </>
  )
}

export default Home