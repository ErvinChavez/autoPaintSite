import { BUSINESS } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";

export default function StickyCTA() {
    return (
        <div className="fixed bottom-4 left-0 w-full z-50 px-4">

            <div className="max-w-2xl mx-auto">

                <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">

                    <div className="grid grid-cols-4 text-white">

                        {/* Call */}
                        <a
                            href={`tel:${BUSINESS.phone}`}
                            className="flex flex-col items-center justify-center py-4 hover:bg-white/10 rounded-l-2xl transition"
                        >
                            <MdCall className="text-2xl text-sky-400"/>
                            <span className="text-xs mt-1 font-medium">
                            Call 
                            </span>
                        </a>

                        {/* Text */}
                        <a
                            href={`sms:${BUSINESS.phone}`}
                            className="flex flex-col items-center justify-center py-4 hover:bg-white/10 transition"
                        >
                            <BsChatDotsFill className="text-xl text-sky-400" />
                            <span className="text-xs mt-1 font-medium">
                                Text
                            </span>
                        </a>

                        {/* Instagram */}
                        <a
                            href={BUSINESS.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center py-4 hover:bg-white/10 rounded-r-2xl transition"
                        >
                            <FaInstagram className="text-2xl text-sky-400" />
                            <span className="text-xs mt-1 font-medium">
                                Instagram
                            </span>
                        </a>

                    </div>
                </div>

                
            </div>
        </div>
    );
}