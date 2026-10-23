import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primer text-ink border-t border-ink/10 pb-28 md:pb-0">
            <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-[2fr_1fr_1fr]">

                {/* About the business */}
                <div>
                    <p className="font-display font-bold text-3xl">{BUSINESS.name}</p>

                    <p className="mt-3 max-w-sm text-steel leading-relaxed">
                        Veteran-owned auto body and paint repair serving {BUSINESS.serviceArea}.
                    </p>

                    <p className="mt-4 font-semibold">Licensed &amp; Insured</p>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-xl">Contact</h2>

                    <ul className="mt-3 space-y-2">
                        <li>
                            <a href={`tel:${BUSINESS.phone}`} className="hover:text-park-blue">
                                Call {BUSINESS.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a href={`sms:${BUSINESS.phone}`} className="hover:text-park-blue">
                                Text photos for a quote
                            </a>
                        </li>
                        <li>
                            <a
                                href={BUSINESS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-park-blue"
                            >
                                Instagram {BUSINESS.instagramHandle}
                            </a>
                        </li>
                    </ul>

                    <p className="mt-4 text-sm text-steel">Shop visits by appointment only.</p>
                </div>

                {/* Pages */}
                <div>
                    <h2 className="text-xl">Pages</h2>

                    <ul className="mt-3 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-park-blue">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/book" className="hover:text-park-blue">
                                Book online
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-ink/10">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row gap-2 sm:justify-between text-sm text-steel">
                    <p>&copy; {year} {BUSINESS.name}</p>
                    <Link href="/privacy-policy" className="hover:text-ink">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}