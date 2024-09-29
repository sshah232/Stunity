import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/stunity-logo-w.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="">
      <Image src={logo} alt="Stunity Logo" width={300} height={300} />
    </Link>
  );
}
