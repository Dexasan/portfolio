"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
    const path = usePathname();
    if (path === "/cv" || path === "/deck")
        return null;
    return <header className={`personal-nav ${path === "/" ? "at-home" : ""}`}><Link className="personal-brand" href="/" aria-label="Sandesh, home">s<span aria-hidden="true">✳</span>c.</Link><nav aria-label="Primary navigation"><Link href="/work" aria-current={path.startsWith("/work") ? "page" : undefined}>work</Link><Link href="/about" aria-current={path === "/about" ? "page" : undefined}>me</Link><a href="mailto:sendmailtodex@gmail.com">say hi ↗</a></nav></header>;
}
