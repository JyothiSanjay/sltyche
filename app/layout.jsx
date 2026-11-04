"use client";
import "./global.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import { site } from "./data/content.js";
import { useEffect, useState } from "react";

 const metadata = {
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

const LINKS = [
{ label: "Home",  anchor: "home" },
{ label: "About", anchor: "about" },
{ label: "Services",  anchor: "services" },
{ label: "Industries",  anchor: "industries" },
{ label: "Engagement",  anchor: "engagement" },
{ label: "Careers",  anchor: "careers" },
{ label: "Contact",  anchor: "contact" },
];
export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(LINKS[0].anchor);
    const [active, setActive] = useState(LINKS[0].anchor);
    const contactHref = "contact";


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry.target.id);

          if (entry.isIntersecting) {
            setSelectedMenu(entry.target.id);
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
          <Nav  active={active} setActive={setActive} open={open} setOpen={setOpen} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} scrollToSection={scrollToSection} />
          <main>{children}</main>
          <Footer  active={active} setActive={setActive} open={open} setOpen={setOpen} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} scrollToSection={scrollToSection} />
        </SmoothScroll>
      </body>
    </html>
  );
}
