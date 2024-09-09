import Image from "next/image";
export default async function NotFound() {
    //Fetch the 404 page from storyblok (this component works as server component aswell)
    //update this component to render a 404 page

    const fetch404Page = async () => {
        try {
            const response = await fetch(
                `https://api.storyblok.com/v2/cdn/stories/not-found?cv=1725549717&token=${process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN}&version=published`
            );
            const data = await response.json();
            // return data;
            return render404Page(data);

        } catch (error) {
            console.log(error);
            return null
        }
    }

    const render404Page = (data) => {
        const { body } = data.story.content;
        const obj = body.find((blok) => {
            return blok.component === "404-message";
        })
        return obj
    }

    const message = await fetch404Page();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="relative text-center">
                {/* lägg till breakpoint för små skärmaar till h1, testa text-9xl */}
                <h1 className="text-[15rem] font-bold text-transparent bg-clip-text bg-cover bg-center"
                    style={{ backgroundImage: `url(${message?.image.filename})` }}
                >404</h1>
                <p className="text-xl mt-4">{message?.comment}</p>
            </div>
        </div>
    )
}