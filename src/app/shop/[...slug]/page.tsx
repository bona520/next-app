export default function Page({ params }: { params: { slug: string } }) {
    return <div>My shop: {params.slug}</div>
}