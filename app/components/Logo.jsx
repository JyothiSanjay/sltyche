import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Sloan Tyche Logo"
      width={100}
      height={50}
      priority
    />
  );
}