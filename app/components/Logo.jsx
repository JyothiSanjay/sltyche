import Image from "next/image";

const basePath =
  process.env.NODE_ENV === "production" ? "/sltyche" : "";

export default function Logo() {
  return (
    <Image
      src={`${basePath}/logo.png`}
      alt="Sloan Tyche Logo"
      width={100}
      height={50}
      priority
    />
  );
}