import { describe } from "node:test";

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
   
];

export default function Services() {
    return (
        <section className="px-6 py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Our Services
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Professional auto body and paint services focused on quality,
                        precision, and customer satisfaction.
                    </p>
                </div>

                {/* Service Card */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}