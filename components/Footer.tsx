"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() { const path = usePathname(); if (path === "/cv" || path === "/deck")
    return null; return <footer className="personal-footer"><nav aria-label="Footer navigation"><a href="https://github.com/Dexasan">github ↗</a><Link href="/cv">résumé ↗</Link><a href="mailto:sendmailtodex@gmail.com">email ↗</a></nav><span>sandesh, 2026 <span aria-hidden="true">✳</span></span></footer>; }
