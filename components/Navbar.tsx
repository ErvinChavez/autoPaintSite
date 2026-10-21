"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { MdCall } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">

            <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Brand */}
                <div className="text-white font-black text-lg tracking-wide">
                    {BUSINESS.name}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-300">
                    <a href="#services" className="hover:text-white transition">Services</a>
                    <a href="#gallery" className="hover:text-white transition">Gallery</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </nav>

                {/* CTA */}
                <a
                    href={`tel:${BUSINESS.phone}`}
                    className="hidden md:flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                >
                    <MdCall />
                    Call Now
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-2xl"
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>

                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-full left-0 w-full md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4 z-50">

                        <a
                            href="#services"
                            onClick={() => setOpen(false)}
                            className="block text-gray-300 hover:text-white"
                        >
                            Services
                        </a>

                    <a
                        href="#gallery"
                        onClick={() => setOpen(false)}
                        className="block text-gray-300 hover:text-white"
                    >
                        Gallery
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="block text-gray-300 hover:text-white"
                    >
                        Contact
                    </a>

                    <a
                        href={`tel:${BUSINESS.phone}`}
                        className="flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-3 rounded-lg font-semibold"
                    >
                        <MdCall />
                        Call Now
                    </a>

                </div>
            )}
        </div>
        </header>
    );
}