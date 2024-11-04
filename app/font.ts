import { Noto_Sans_KR } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const EliceDXNeolliOTF = localFont({
  src: [
    {
      path: "./fonts/EliceDXNeolliOTF-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/EliceDXNeolliOTF-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EliceDXNeolliOTF-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-elice-dx-neolli",
});

export const suit = localFont({
  src: [
    {
      path: "./fonts/SUIT-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
});

export const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const GeistVF = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-vf",
  weight: "400",
});
