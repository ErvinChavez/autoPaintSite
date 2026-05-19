import { BUSINESS } from "@/lib/constants";
import { MdCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="bg-black px-6 py-24 ">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-black text-white">
                    Get Your Free Estimate
                </h2>

                <p className="mt-4 text-gray-400 text-lg">
                    Contact Chris today for fast quotes and professional auto body repair.
                </p>

                {/* CTA Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-3">

                    {/* Call */}
                    <a 
                        href={`tel:${BUSINESS.phone}`}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition"
                    >
                        <MdCall className="text-3xl text-sky-400 mx-auto"/>
                        <p className="mt-3 text-white font-semibold">Call Now</p>
                    </a>

                    {/* Instagram */}
                    <a 
                        href={BUSINESS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition"
                    >
                        <FaInstagram className="text-3xl text-sky-400 mx-auto" />
                        <p className="mt-3 text-white font-semibold">Instagram</p>
                    </a>

                </div>

                {/* Footer note */}
                <p className="mt-10 text-sm text-gray-500">
                    Park Auto Paint & Body • Buford, GA
                </p>

                <a
                    href="/privacy-policy"
                    className="inline-block text-sm text-gray-600 hover:text-white transition"
                >
                    Privacy Policy
                </a>

            </div>
        </section>
    );
}