import Image from "next/image";

const galleryImages = [
    {
        before:"/classicBefore.jpg",
        after:"/classicAfter.jpg",
        title:"Full Paint & Body Restoration",
    },
    {
        before:"/infinitiBefore.jpg",
        after:"/infinitiAfter.jpg",
        title:"Rear Bumper & Dent Repair",
    },
    {
        before:"/bmwBefore.jpg",
        after:"/bmwAfter.jpg",
        title:"Chip Paint Restoration",
    },
    {
        before:"/kiaBefore.jpg",
        after:"/kiaAfter.jpg",
        title:"Dent Door Repair",
    },
];

export default function Gallery() {
    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Recent Work
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Real before and after results from completed projects.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid gap-12">
                    {galleryImages.map((item) => (
                        <div
                            key={item.title}
                            className="grid md:grid-cols-2 gap-6 items-center"
                        >

                            {/* Before */}
                            <div>
                                <p className="mb-2 font-semibold text-gray-700">
                                    Before
                                </p>

                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                                    <Image
                                        src={item.before}
                                        alt={`${item.title} before`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* After */}
                            <div>
                                <p className="mb-2 font-semibold text-gray-700">
                                    After
                                </p>

                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                                    <Image
                                        src={item.after}
                                        alt={`${item.title} after`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="md:col-span-2 text-center">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};