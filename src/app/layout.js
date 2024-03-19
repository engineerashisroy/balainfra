import "./globals.css";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Home || Bala Infra Build Constrution",
  description: "Best Construction Company In Pune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <SiteNavbar></SiteNavbar>
        {children}
        <SiteFooter></SiteFooter>
      </body>
    </html>
  );
}
