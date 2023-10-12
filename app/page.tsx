import AlbumSelection from "@/components/album-selection";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {
// const res = await getByTag("favorite", 15)
  const data = await prisma.image.findFirst()
  console.log('data', data)
  if (!data) return undefined

  return (
    <main className="bg-black flex min-h-screen flex-col pt-24">
      <AlbumSelection />
      
      <section className="flex flex-col gap-4 px-4">
        {data && (
          <Image 
            src={data.link!}
            width={400}
            height={400}
            alt="my image"
          />
        )}
      </section>
    </main>
  )
}
