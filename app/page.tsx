import AlbumSelection from "@/components/album-selection";

export default async function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col pt-24">
      <AlbumSelection />
      
      <section className="flex flex-col gap-4 px-4">
      </section>
    </main>
  )
}
