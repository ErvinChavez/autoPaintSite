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
        <section id="gallery" className="bg-black px-6 py-24">

            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        Recent Work
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg">
                        Real before and after transformations from completed projects.
                    </p>
                </div>

                {/* Gallery */}
                <div className="space-y-20">

                    {galleryImages.map((item) => (
                        <div key={item.title} className="space-y-6">

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                                {item.title}
                            </h3>

                            {/* Before / After */}
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Before */}
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Before</p>

                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
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
                                    <p className="text-sm text-sky-400 mb-2">After</p>

                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src={item.after}
                                            alt={`${item.title} after`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div> 

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};