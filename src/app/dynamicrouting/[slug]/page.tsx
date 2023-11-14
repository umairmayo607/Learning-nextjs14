export default function Page({ params }: { params: { slug: string } })
 {
  return <div>My Name: {params.slug}</div>
}