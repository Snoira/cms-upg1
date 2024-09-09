import Image from "next/image"

export default function Grid({ blok }) {
    return (
        <section className="w-full p-8 flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {blok?.columns?.map((blok) => {
                    if (blok.new === false) return null
                    return <div key={blok?._uid} className="bg-white p-4 rounded-lg shadow-md">
                        <Image
                            src={blok?.image.filename}
                            alt={blok?.image.alt || 'Beer image'}
                            width={200}
                            height={300}
                            className="rounded-lg"
                        />
                        <h1 className="text-xl font-bold mt-4">{blok?.titel}</h1>
                        <p className="text-gray-600 mt-2">{blok?.text}</p>
                    </div>
                })}
            </div>
        </section>
    )
}