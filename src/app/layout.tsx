import { Inter } from 'next/font/google'
import './globals.css'
import { CommonLayout } from '@/common/components/layouts';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Photohub | Discover a World of Captivating Images and Wallpapers',
  description: 'Discover a World of Captivating Images and Wallpapers',
  keyword: 'Photohub, images, wallpapers, photography, picture hub, image gallery,image,photo,photos',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modalOverlay" className="z-50" />
        <CommonLayout >
          {children}
        </CommonLayout>
      </body>
    </html>
  )
}
