import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Like and subscribe
      <Image
        aria-hidden
        src="/logo.webp"
        alt="Globe icon"
        width={406}
        height={406}
      />
    </div>
  );
}
