import { Landing } from "@/components/Landing"


export default async function Home() {
  return (
    <main className="bg-black text-white flex min-h-screen flex-col px-6 pt-24">          
      <Landing /> 
    </main>
  )
}
