import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Infinex Technologies Pvt. Ltd.",
    template: "%s | The Infinex Technologies",
  },

  description:
    "The Infinex Technologies Pvt. Ltd. provides software development, AI solutions, website development, mobile app development, ERP, CRM and digital transformation services.",

  keywords: [
    "Software Development",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "ERP Software",
    "CRM Software",
    "IT Company India",
    "The Infinex Technologies",
  ],

  authors: [
    {
      name: "The Infinex Technologies Pvt. Ltd.",
    },
  ],

  creator: "The Infinex Technologies",
  publisher: "The Infinex Technologies",

  metadataBase: new URL("https://infinexhub.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Infinex Technologies Pvt. Ltd.",
    description:
      "AI solutions, custom software, websites, mobile apps and enterprise technology services.",
    url: "https://infinexhub.com",
    siteName: "The Infinex Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Infinex Technologies Pvt. Ltd.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Infinex Technologies Pvt. Ltd.",
    description:
      "Software Development | AI Solutions | Web Development | Mobile Apps",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}