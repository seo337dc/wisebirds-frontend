import Layout from "@/components/common/Layout";

import QueryProvider from "@/util/QueryClientProvider";
import GlobalStyleWrapper from "@/styles/GlobalStyleWrapper";
import StyledComponentsRegistry from "@/styles/StyledComponentsRegistry";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <StyledComponentsRegistry>
            <GlobalStyleWrapper>
              <Layout>{children}</Layout>
            </GlobalStyleWrapper>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
