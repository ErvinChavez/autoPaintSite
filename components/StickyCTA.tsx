import { BUSINESS } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl z-[100] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-black/10">
            <div className="grid grid-cols-4 text-center text-sm font-semibold text-gray-800">

                {/* Call */}
                <a
                    href={`tel:${BUSINESS.phone}`}
                    className="py-4 hover:bg-gray-100 active:bg-gray-200 transition"
                >
                    Call
                </a>

                {/* Text */}
                <a
                    href={`sms:${BUSINESS.phone}`}
                    className="py-4 hover:bg-gray-100 active:bg-gray-200 transition"
                >
                    Text
                </a>

                {/* Instagram */}
                <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 hover:bg-gray-100 active:bg-gray-200 transition"
                >
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}