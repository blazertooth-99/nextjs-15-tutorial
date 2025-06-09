import Image from 'next/image'
import wondersImages, { WonderImage } from '@/app/photo-feed/wonders'
import Modal from '@/app/components/modal'

export default async function PhotoModal ({
    params,
}: {
    params: Promise <{ id: string }>;
}){
    const { id } = await params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

    return (
        <Modal>
            <Image
                src={photo.src}
                alt={photo.name}
                className="relative w-full h-auto max-w-[300px] object-cover aspect-square"
            />

            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    )
}