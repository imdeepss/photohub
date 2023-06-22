"use client"
import { Footer, Header } from '@/common/components/layouts'
import { ThemeProvider } from 'next-themes';

const CommonLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <ThemeProvider attribute='class'>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default CommonLayout