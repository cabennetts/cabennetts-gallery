import AlbumSelection from "@/components/album-selection";
import { notFound } from 'next/navigation';
import { prisma } from "@/lib/prisma";
import ImageList from "@/components/ImageList";
import { NoPhotos } from "@/components/no-photos";

// export const revalidate = 86400
export const revalidate = 0

type AlbumData = {
    Images: {
        id: string;
        title: string | null;
        description: string | null;
        link: string | null;
        tags: {
            name: string;
        }[];
    }[];
};
type Props = {
    params: {
        name: string
    }
}

export async function generateMetadata({ params: { name } }: Props) {
    return {
        title: `${name} | Albums - cabennetts.gallery`
    }
}

function slugToString(slug: string): string {
    return slug.replace(/-/g, ' ');
}

async function fetchData(album: string) {
    const formattedName: string = slugToString(album)
    const data = await prisma.album.findUnique({
        where: {
            name: formattedName
        },
        select: {
            Images: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    link: true,
                    tags: {
                        select: {
                            name: true
                        }
                    }
                }
            },
        }
    })
    if (!data) return null
    return data
}


export default async function Post({ params: { name } }: Props) {
    
    const data = await fetchData(name)
    console.log('data', data)
    if (!data) return notFound()

    return (
        <main className="bg-black flex min-h-screen flex-col pt-24">
            <AlbumSelection />
                { data.Images.length === 0 ? (
                    <NoPhotos />
                ) : (
                    <ImageList images={data.Images}/>
                )}
                
        </main>
    )
}