import Image from 'next/image'
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
    params,
}:{
    params: Promise<{id:string}>;

}) {
    const {id} = await params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-exl font-bold my-4">{photo.name}</h1>
                </div>
                <Image
                alt={photo.name}
                src={photo.src}
                width={300}
                height={300}
                className="object-cover aspect-square"
                />
                <div className="bg-white py-4">
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div>
    )
}