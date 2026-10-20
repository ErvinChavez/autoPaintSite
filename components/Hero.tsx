import { BUSINESS } from "@/lib/constants";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">
            
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/parkAutoShop.jpg')",
                }}
            />

            {/* Content */}
            <div className="relative z-20 max-w-5xl text-center">

                {/* Small Tag */}
                <p className="text-sky-400 font-semibold tracking-[0.25em] uppercase">
                    {BUSINESS.name}
                </p>
                
                {/* Main Heading */}
                <h1 className="mt-4 text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                    Professional Auto Paint & Body Repair
                </h1>

                {/* Supporting Text */}
                <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    High-quality collision repair, paint matching, and body restoration.
                    Fast turnaround. Honest pricing. Trusted local work.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    
                    {/*Call Button*/}
                    <a 
                        href={`tel:${BUSINESS.phone}`}
                        className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition"
                    >
                        Call Now
                    </a>

                    {/*Text Button*/}
                    <a
                        href={`sms:${BUSINESS.phone}`}
                        className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl text-lg font-bold border border-white/10 transition"
                    >
                        Text for Quote
                    </a>
                </div>

                {/* Trust Line */}
                <p className="mt-8 text-sm text-gray-400">
                    Trusted local craftsmanship • Free estimates • Fast response
                </p>

            </div>
        </section>
    );
};