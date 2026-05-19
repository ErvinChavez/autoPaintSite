const services = [
    {
        title:"Collision Repair",
        description:
            "Complete collision repair service to restore your vehicle safely and professionally.",
    },
    {
        title: "Auto Painting",
        description:
            "High-quality paint matching and refinishing for clean factory-style finish.",
    },
    {
        title: "Dent & Scratch Repair",
        description:
            "Remove dents, scratches, and surface damage to bring your vehicle back to life.",
    },
    {
        title: "Bumper Repair",
        description:
            "Repair cracked, scratched, or damaged bumpers with seamless restoration work.",
    },
    {
        title: "Paint Correction",
        description:
            "Correct faded paint, swirl marks, and imperfections for a refreshed appearance.",
    },
    {
        title: "Full Mechanical Repairs",
        description: 
            "Professional mechanical repair services to keep your vehicle running safely, reliably, and at peak performance."
    }
   
];

export default function Services() {
    return (
        <section id="services" className="bg-black px-6 py-24">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Our Services
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg">
                        Professional auto body and paint services focused on quality,
                        precision, and customer satisfaction.
                    </p>
                </div>

                {/* Service Card */}
                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
                        >
                            <h3 className="text-xl font-bold text-white">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}