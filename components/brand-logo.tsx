import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  children,
  className = "inline-flex items-center gap-3",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link className={className} href="/" aria-label="Binhlaig home">
      <Image
        className="h-10 w-auto object-contain dark:hidden"
        src="/logo/nobg_logo_darkmode.png"
        alt="Binhlaig logo"
        width={1254}
        height={1254}
        sizes="40px"
        priority
      />
      <Image
        className="hidden h-10 w-auto object-contain dark:block"
        src="/logo/bg_darkmode.png"
        alt="Binhlaig UI brand logo"
        width={1254}
        height={1254}
        sizes="40px"
        priority
      />
      {children}
    </Link>
  );
}
