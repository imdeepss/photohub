import { ImageGallery } from "@/common/components/ui";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <>
      <Analytics />
      <ImageGallery />
    </>
  )
}

export default Home