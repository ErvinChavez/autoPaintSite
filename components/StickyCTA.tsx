import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";
import { MdCall, MdEventAvailable } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";

export default function StickyCTA() {
    return (
        <nav
            aria-label="Quick contact"
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-paper border-t border-ink/10 shadow-[0_-4px_16px_rgba(27,31,36,0.08)] pb-[env(safe-area-inset-bottom)]"
        >
            <div className="grid grid-cols-4 text-ink">

                {/* Call */}
                <a
                    href={`tel:${BUSINESS.phone}`}
                    className="flex flex-col items-center justify-center py-3"
                >
                    <MdCall aria-hidden="true" className="text-2xl text-park-blue" />
                    <span className="text-xs mt-1 font-semibold">Call</span>
                </a>

                {/* Text */}
                <a
                    href={`sms:${BUSINESS.phone}`}
                    className="flex flex-col items-center justify-center py-3"
                >
                    <BsChatDotsFill aria-hidden="true" className="text-xl text-park-blue" />
                    <span className="text-xs mt-1 font-semibold">Text</span>
                </a>

                {/* Book */}
                <Link
                    href="/book"
                    className="flex flex-col items-center justify-center py-3 bg-park-blue text-white"
                >
                    <MdEventAvailable aria-hidden="true" className="text-2xl" />
                    <span className="text-xs mt-1 font-semibold">Book</span>
                </Link>

                {/* Instagram */}
                <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-3"
                >
                    <FaInstagram aria-hidden="true" className="text-2xl text-park-blue" />
                    <span className="text-xs mt-1 font-semibold">Instagram</span>
                </a>

            </div>
        </nav>
    );
}