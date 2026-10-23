"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Let keyboard users close the mobile menu with Escape
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 bg-paper border-b border-ink/10">
            <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

                {/* Brand */}
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="font-display font-bold text-2xl tracking-tight text-ink"
                >
                    {BUSINESS.name}
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="Main" className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map((link) => {
                        const isCurrent = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isCurrent ? "page" : undefined}
                                className={
                                    isCurrent
                                        ? "font-semibold text-park-blue"
                                        : "font-medium text-steel hover:text-ink transition-colors"
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-5">
                    <a
                        href={`tel:${BUSINESS.phone}`}
                        className="flex items-center gap-2 font-semibold text-ink hover:text-park-blue transition-colors"
                    >
                        <MdCall aria-hidden="true" />
                        {BUSINESS.phoneDisplay}
                    </a>

                    <Link
                        href="/book"
                        className="bg-park-blue hover:bg-park-blue-dark text-white px-4 py-2 rounded-md font-semibold transition-colors"
                    >
                        Book online
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="md:hidden -mr-2 p-2 text-3xl text-ink"
                >
                    {open ? <HiX aria-hidden="true" /> : <HiMenu aria-hidden="true" />}
                </button>

                {/* Mobile Menu */}
                {open && (
                    <nav
                        id="mobile-menu"
                        aria-label="Main"
                        className="absolute top-full left-0 w-full md:hidden bg-paper border-b border-ink/10 px-6 pt-2 pb-6 shadow-lg"
                    >
                        <ul>
                            {NAV_LINKS.map((link) => {
                                const isCurrent = pathname === link.href;

                                return (
                                    <li key={link.href} className="border-b border-ink/10">
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-current={isCurrent ? "page" : undefined}
                                            className={`block py-4 font-display text-2xl font-semibold ${
                                                isCurrent ? "text-park-blue" : "text-ink"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <a
                                href={`tel:${BUSINESS.phone}`}
                                className="flex items-center justify-center gap-2 border border-ink/20 text-ink px-4 py-3 rounded-md font-semibold"
                            >
                                <MdCall aria-hidden="true" />
                                Call
                            </a>

                            <Link
                                href="/book"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center bg-park-blue text-white px-4 py-3 rounded-md font-semibold"
                            >
                                Book online
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}