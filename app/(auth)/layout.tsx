import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const font = Poppins({
    subsets: ["latin"],
    weight: ["300", "500", "600", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`${font.className}`}>{children}</body>
        </html>
    );
}
