import { BUSINESS } from "@/lib/constants";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-6 bg-gray-50">
            <div className="max-w-4xl w-full text-center">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Park Auto Paint & Body
                </h1>
                <h2 className="mt-3 text-lg md:text-2xl font-medium text-gray-700">
                    Professional Auto Paint & Body Repair
                </h2>

                <p className="mt-4 text-lg md:text-xl text-gray-600">
                    High-quality collision repair, paint matching, and body restoration.
                    Fast turnaround. Honest pricing. Trusted local work.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    
                    {/*Call Button*/}
                    <a 
                        href={`tel:${BUSINESS.phone}`}
                        className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
                    >
                        Call Now
                    </a>

                    {/*Text Button*/}
                    <a
                        href={`sms:${BUSINESS.phone}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                    >
                        Text for Quote
                    </a>
                </div>

                {/* Trust Line */}
                <p className="mt-6 text-sm text-gray-500">
                    Free estimates • Fast response • Local trusted shop
                </p>

            </div>
        </section>
    )
};