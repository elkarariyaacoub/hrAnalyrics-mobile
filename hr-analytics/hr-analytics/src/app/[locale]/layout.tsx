import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from "./StoreProvider";

import './globals.css';

const popiPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HR Analytics",
  description: "HR Analytics",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  if (false) return (
    <html lang={locale}>
      <body className={popiPoppins.className}>
        <NextIntlClientProvider messages={messages}>
          <div>Under maintenance</div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
  
  return (
    <html lang={locale}>
      <body className={popiPoppins.className}>
        <StoreProvider page={0}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}