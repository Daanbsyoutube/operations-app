import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Operations",description:"A frictionless personal organisation system.",manifest:"/manifest.webmanifest",appleWebApp:{capable:true,title:"Operations",statusBarStyle:"default"}};
export const viewport: Viewport = {themeColor:"#f3efe5",width:"device-width",initialScale:1};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="nl"><body>{children}</body></html>}