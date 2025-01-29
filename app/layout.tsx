import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import AuthLayout from "./authLayout";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Sketchare";
const APP_DEFAULT_TITLE = "Sketchare";
const APP_DESCRIPTION = "Aplikasi Pembelajaran";

export const metadata: Metadata = {
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brule`}>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
