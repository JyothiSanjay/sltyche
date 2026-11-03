import App from "./App";
import image from "./favicon.ico";


export const metadata = {
  title: "Sloan Tyche | SAP Consulting, Staffing & Managed Services",
  logo: {image},
  description: "Sloan Tyche Private Limited — trusted SAP consulting and talent solutions partner. SAP S/4HANA transformation, resource augmentation, project delivery and managed services from Bangalore, India.",
};

export default function HomePage() {
  return (
    <>
      <App />
    </>
  );
}
