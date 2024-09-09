export default function Footer({ config }) {
    return (
        <section className="w-full bg-red">
            <p>{config?.content.body[1].text}</p>
        </section>
    )
}