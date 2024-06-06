import { Inter } from "next/font/google";

import CustomLinks from "./components/customLinks";

const inter = Inter({ subsets: ["latin"] });
import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav className="p-4 border-b border-gray-400">
                    <ul className="flex gap-5">
                        <li><CustomLinks prefecth={false} path="/">Home</CustomLinks></li>
                        <li><CustomLinks path="/dashboard/analytics">Anylytics</CustomLinks></li>
                        <li><CustomLinks path="/dashboard/settings">Contact Us</CustomLinks> </li>
                        <li><CustomLinks path="/heavy">heavy </CustomLinks> </li>
                        <li><CustomLinks path="/blogs">Blogs </CustomLinks> </li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}
