import Link from 'next/link'
import Image from 'next/image'

export default function Header({ config }) {
    return (
        <section  className="bg-white shadow-md">
            <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
                <div className="flex items-center w-full md:w-auto">
                    <Link href="/home" legacyBehavior>
                        <a className="flex items-center"> {/* varför lägga till a-element?? tillägg efter feedback från copilot, semantik? */}
                            <Image src={config?.content.body[0].logo.filename} alt="hop notch logo" width={300} height={300} className="mr-3" />
                            {/* <span className="text-xl font-bold">Hop Notch</span> */}
                        </a>
                    </Link>
                </div>
                <div className="w-full md:w-auto">
                    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                        {
                            config?.content.body[0].block.map((blok) => (
                                <Link href={blok.link.cached_url} key={blok._uid} legacyBehavior>
                                    <a className="hover:text-gray-400">
                                        {blok.label}
                                    </a>
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </section>
    )
}