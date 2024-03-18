import Dog from "@/models/Dog.class";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { DogSize } from "@/types";

export default function DogPic({dogSize}: {dogSize: DogSize | undefined}) {
    if (!dogSize) { // || !dogs.has(dogSize)) {
        return null;
    } else {
        const url = Dog.imageUrl(dogSize) || "";
        const size = Dog.imageSize(dogSize);
        return (
            <Badge variant='default'>
                <Image src={url} alt={"Dog of size " + dogSize} width={size} height={size} />
            </Badge>
        );
    }
}