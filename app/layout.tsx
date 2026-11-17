import type { Metadata, Viewport } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9f0a0aff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anilpanthi.com.np"),
  title: {
    default: "Anil Panthi | Software Engineer & Full Stack Developer",
    template: "%s | Anil Panthi",
  },
  description:
    "Personal portfolio of Anil Panthi — Software Engineer and Full Stack Developer. Explore projects, technical skills, experience, and contact details.",
  keywords: [
    "Anil Panthi",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Anil Panthi", url: "https://anilpanthi.com.np" }],
  creator: "Anil Panthi",
  publisher: "Anil Panthi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilpanthi.com.np",
    siteName: "Anil Panthi",
    title: "Anil Panthi | Software Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Anil Panthi — Software Engineer and Full Stack Developer showcasing projects, technical expertise, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anil Panthi - Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Panthi | Software Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Anil Panthi — Software Engineer and Full Stack Developer showcasing projects, technical expertise, and experience.",
    creator: "@anilpanthi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/FaviconLIght.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/FaviconDark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
