import { BUSINESS } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="px-6 py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold">
                    Get Your Free Estimate
                </h2>

                {/* Subtext */}
                <p className="mt-4 text-lg text-gray-300">
                    Call or text us today for fast quotes and professional
                    auto body repair services
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    {/* Call */}
                    <a 
                        href={`tel:${BUSINESS.phone}`}
                        className="bg-white text-black px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition"
                    >
                        Call Now
                    </a>

                    {/* Text */}
                    <a 
                        href={`sms:${BUSINESS.phone}`}
                        className="bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
                    >
                        Text for Quote
                    </a>
                </div>

                {/* Contact Info */}
                <div className="mt-10 space-y-2 text-gray-300">
                    <a
                        href={BUSINESS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                    <FaInstagram className="text-xl" />
                    </a>
                </div>
            </div>
        </section>
    )
}