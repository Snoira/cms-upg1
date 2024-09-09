import Image from "next/image"

export default function Hero({ blok }) {
    return (
        <section className="w-full p-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4" >{blok?.titel}</h1>
                    <p className="text-lg mb-6" >{blok?.text}</p>
                    {/* <img src={blok?.image.filename} alt="" /> */}
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <Image
                        src={blok?.image.filename}
                        alt={blok?.image?.alt || 'Hero image'}
                        width={800}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}