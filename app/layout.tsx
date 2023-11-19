import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "MedVirtua",
    description: "Espalhando conhecimento medicinal para as pessoas",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${font.className}`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
