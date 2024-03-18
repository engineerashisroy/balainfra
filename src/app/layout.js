import SiteNavbar from "@/components/SiteNavbar";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Services || Bala Infra Build Constrution",
  description: "Best Construction Company In Pune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteNavbar></SiteNavbar>
        {children}
        <SiteFooter></SiteFooter>
      </body>
    </html>
  );
}
