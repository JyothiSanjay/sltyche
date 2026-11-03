import "./global.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/content";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | SAP Consulting, Staffing & Managed Services`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
  keywords: [
    "SAP consulting", "SAP resource augmentation", "SAP S/4HANA transformation",
    "SAP staffing Bangalore", "SAP managed services", "SAP project delivery", "SAP talent solutions",
  ],
  openGraph: {
    title: `${site.name} | SAP Consulting & Talent Solutions`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: site.phone,
              address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
              description: site.description,
            }),
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
