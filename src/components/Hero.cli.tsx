'use client';

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PATH_TO_QUOTATIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function Hero() {
    const router = useRouter();
    // TODO: move SVGs to their own components
    return (
        <div className="p-10 pt-[10vh] w-full h-screen flex flex-col align-middle gap-5">
            <svg
                width="auto"
                height="auto"
                viewBox="0 0 355 223.64595591107974"
                className={
                    cn(
                        "mb-10 md:mb-0 mx-auto",
                        "w-[70vw] max-w-[350px] h-[50vmin] max-h-[170px]",
                        "sm:w-[350px] sm:max-w-max sm:h-[200px] sm:max-h-max",
                        "md:w-[450px] md:h-[350px]",
                        "lg:w-[500px] lg:h-[400px]",
                        "xl:w-[600px] xl:h-[500px]"
                    )}>
                <defs id="SvgjsDefs3050"></defs>
                <g id="buster" transform="matrix(2.240420467799599,0,0,2.240420467799599,68.44858163430932,-33.22193948475833)" fill="#999">
                    <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.63,50c0-2.81-2.29-5.09-5.09-5.09c-2.81,0-5.09,2.29-5.09,5.09c0,2.81,2.29,5.09,5.09,5.09   C40.35,55.1,42.63,52.81,42.63,50z M33.44,50c0-2.26,1.83-4.1,4.1-4.1c2.26,0,4.1,1.83,4.1,4.1c0,2.26-1.83,4.1-4.1,4.1   C35.28,54.1,33.44,52.26,33.44,50z"></path>
                    <path d="M61.75,44.91c-2.81,0-5.09,2.29-5.09,5.09c0,2.81,2.29,5.09,5.09,5.09s5.09-2.29,5.09-5.09   C66.84,47.19,64.56,44.91,61.75,44.91z M61.75,54.1c-2.26,0-4.1-1.83-4.1-4.1c0-2.26,1.83-4.1,4.1-4.1c2.26,0,4.1,1.83,4.1,4.1   C65.84,52.26,64.01,54.1,61.75,54.1z"></path>
                    <path fill="white" d="M40.24,50c0-1.49-1.21-2.7-2.7-2.7s-2.7,1.21-2.7,2.7c0,1.49,1.21,2.7,2.7,2.7S40.24,51.49,40.24,50z"></path>
                    <path fill="white" d="M61.85,47.3c-1.49,0-2.7,1.21-2.7,2.7c0,1.49,1.21,2.7,2.7,2.7c1.49,0,2.7-1.21,2.7-2.7C64.56,48.51,63.35,47.3,61.85,47.3   z"></path>
                    <path d="M91.01,19.04l-11.34-1.07l-5.73-0.85c-1.53-0.23-3.09,0.21-4.28,1.2L57.6,28.38c-1.58-0.3-3.27-0.37-4.64-0.38   c0,0,0,0-0.01,0c-0.36,0-0.67,0.27-0.71,0.63c0,0.03-0.36,3.23-0.54,7.01c-0.24,5.04-0.05,8.61,0.56,10.61   c0.55,1.81,1.78,4.09,3.2,6.73c2.32,4.32,4.96,9.22,5.68,13.89c0.45,2.89,0.08,5.79-0.54,8.26c-0.85,0.71-1.78,1.18-2.76,1.68   c-2.94,1.16-5.89-0.6-7.4-1.76c-1.06-0.79-2.29-0.88-3.38-0.23c-0.01,0.01-0.02,0.01-0.04,0.02c-1.94,1.32-5.12,2.66-7.72,2.06   c-1.19-0.27-2.12-0.93-2.76-1.96c-0.17-2.41-0.17-5.16,0.3-7.77c0.62-3.47,2.85-7.03,5.21-10.81c2.14-3.42,4.35-6.96,5.35-10.53   c1.8-6.49,1.21-14.58,1.02-16.65c0.11-0.16,0.16-0.37,0.11-0.56c0-0.02-0.01-0.04-0.01-0.05c-0.09-0.3-0.37-0.51-0.68-0.51   c-1.56-0.01-3.59-0.01-5.63,0.18l-11.88-9.9c-1.19-0.99-2.75-1.43-4.28-1.2l-5.73,0.85L8.99,19.04c-1.69,0.16-2.99,1.57-2.94,3.21   l0.43,15.71l2.41-2.01l1.57,7.38c0.38,1.8,1.42,3.39,2.91,4.47l2.38,1.72c0.48,0.35,1.17,0.66,1.68,0.87l-2.22,4.57   c-0.09,0.19-0.1,0.42,0,0.62c0.09,0.2,0.27,0.34,0.48,0.39l2.9,0.69l-4.56,7.25c-0.15,0.24-0.23,0.49-0.24,0.74   c-0.03,1.13,1.16,1.36,1.74,1.48c0.1,0.02,0.2,0.04,0.29,0.06c0.67,0.16,1.09,0.92,1.19,1.55c0.14,0.83-0.07,1.73-0.27,2.6   l-1.31,5.73c-0.09,0.39-0.28,1.21,0.24,1.84c0.28,0.34,0.66,0.48,0.93,0.56c1.19,0.35,2.43,0.12,3.43-0.07l1.56-0.29   c1.82-0.34,3.74-0.03,5.4,0.88c2.77,1.52,6.03,2.72,9.69,3.55c0.05,0.01,0.11,0.02,0.16,0.02c0.19,0,0.37-0.07,0.51-0.21   c0.17-0.17,0.24-0.43,0.19-0.67c-0.09-0.37-0.47-2.06-0.76-4.4c0.64,0.48,1.38,0.82,2.21,1.01c2,0.46,5.36,0.11,8.83-2.26   c0.58-0.34,1.18-0.29,1.76,0.15c2.09,1.61,4.23,2.43,6.24,2.43c0.89,0,1.75-0.16,2.57-0.49c0.02-0.01,0.04-0.02,0.05-0.02   c0.5-0.25,1.01-0.51,1.52-0.8c-0.88,2.64-1.88,4.44-1.96,4.59c-0.14,0.24-0.12,0.54,0.04,0.76c0.14,0.19,0.35,0.3,0.58,0.3   c0.04,0,0.09,0,0.13-0.01c4.22-0.79,8.11-2.09,11.26-3.77c1.73-0.92,3.71-1.23,5.57-0.88l0.63,0.12c1,0.19,2.24,0.42,3.43,0.07   c0.26-0.08,0.65-0.22,0.93-0.56c0.52-0.63,0.33-1.45,0.24-1.84l-1.31-5.73c-0.2-0.87-0.4-1.77-0.27-2.6   c0.11-0.63,0.52-1.39,1.19-1.55c0.09-0.02,0.19-0.04,0.29-0.06c0.57-0.11,1.76-0.35,1.74-1.48c-0.01-0.25-0.09-0.5-0.24-0.74   l-4.56-7.25l2.9-0.69c0.21-0.05,0.39-0.19,0.48-0.39c0.09-0.2,0.09-0.42,0-0.62l-2.21-4.55c0.56,0.15,1.25,0.3,1.72,0.3   c1.29,0,2.58-0.39,3.68-1.19l2.38-1.72c1.49-1.08,2.53-2.67,2.91-4.47l1.57-7.38l2.41,2.01l0.43-15.71   C93.99,20.61,92.7,19.2,91.01,19.04z M16.6,48.37l-2.38-1.72c-1.21-0.87-2.04-2.16-2.35-3.61l-1.73-8.12l12.68-10.6   c0.3-0.25,0.34-0.7,0.09-1c-0.25-0.3-0.7-0.34-1-0.09L7.83,34.98L7.48,22.21c-0.02-0.89,0.7-1.66,1.65-1.75l11.57-1.09   c0.08-0.01,0.15-0.03,0.21-0.06c0,0,0.01,0.01,0.01,0.01l5.34-0.79c0.2-0.03,0.39-0.04,0.59-0.04c0.93,0,1.85,0.33,2.58,0.93   l10.92,9.05c-1.83,0.31-3.55,0.84-4.79,1.75c-1.44,1.06-2.4,1.95-2.83,2.38l-6.59-0.65c-0.31-0.03-0.6,0.14-0.72,0.42   c-0.12,0.28-0.05,0.61,0.18,0.82c0.55,0.48,1.09,0.99,1.61,1.51l-4.9,1.05c-0.24,0.05-0.44,0.23-0.52,0.46   c-0.08,0.23-0.04,0.49,0.12,0.69c0.63,0.76,1.33,1.47,2.1,2.11l-5.33,8.86c-0.01,0.02-0.02,0.04-0.03,0.06l-0.54,1.11   C17.6,48.87,16.97,48.64,16.6,48.37z M27.69,77.73c-1.43-0.79-3.03-1.19-4.62-1.19c-0.58,0-1.15,0.05-1.72,0.16l-1.56,0.29   c-0.89,0.17-1.91,0.36-2.76,0.1c-0.19-0.06-0.23-0.1-0.24-0.1c-0.02-0.02-0.06-0.12,0.05-0.61l1.31-5.73   c0.22-0.96,0.47-2.04,0.28-3.15c-0.19-1.12-0.96-2.39-2.27-2.7c-0.11-0.03-0.22-0.05-0.34-0.07c-0.15-0.03-0.38-0.08-0.53-0.13   l5.05-8.03c0.12-0.19,0.14-0.44,0.06-0.65c-0.09-0.21-0.27-0.37-0.5-0.42l-3.01-0.71l3.02-6.21l5.64-9.37   c0.19-0.31,0.11-0.71-0.18-0.93c-0.56-0.43-1.08-0.89-1.57-1.39l4.96-1.07c0.25-0.05,0.45-0.24,0.53-0.48   c0.08-0.25,0.01-0.51-0.16-0.7c-0.34-0.36-0.68-0.71-1.04-1.06l4.83,0.48c0.22,0.02,0.44-0.06,0.59-0.22   c0.01-0.01,1.03-1.1,2.88-2.45c2.42-1.77,7.28-1.9,10.61-1.9c0.01,0,0.02,0,0.02,0c0.19,2.23,0.69,9.95-0.99,15.97   c-0.94,3.37-3.1,6.82-5.18,10.16c-2.33,3.72-4.74,7.57-5.41,11.31c-0.49,2.7-0.49,5.54-0.32,8.03c-0.03,0.13-0.02,0.27,0.03,0.41   c0.18,2.34,0.52,4.33,0.76,5.53C32.83,80.09,30.06,79.03,27.69,77.73z M79.38,54.78l-3.01,0.71c-0.22,0.05-0.41,0.21-0.5,0.42   c-0.09,0.21-0.07,0.45,0.06,0.65l5.05,8.03c-0.15,0.05-0.39,0.1-0.53,0.13c-0.12,0.02-0.23,0.05-0.34,0.07   c-1.31,0.31-2.08,1.58-2.27,2.7c-0.18,1.11,0.06,2.19,0.28,3.15l1.31,5.73c0.11,0.49,0.07,0.59,0.05,0.61c0,0-0.04,0.05-0.24,0.1   c-0.86,0.26-1.87,0.06-2.76-0.1l-0.63-0.12c-2.18-0.41-4.49-0.05-6.51,1.02c-2.67,1.42-5.9,2.57-9.43,3.34   c0.55-1.18,1.34-3.06,1.94-5.32c0.17-0.18,0.23-0.43,0.17-0.66c0.63-2.58,0.99-5.59,0.52-8.6c-0.76-4.92-3.57-10.15-5.83-14.35   c-1.38-2.57-2.57-4.79-3.09-6.47c-1.19-3.88-0.3-13.78-0.04-16.4c2.15,0.05,4.89,0.27,6.42,1.28c1.59,1.05,2.97,2,2.99,2.01   c0.08,0.06,0.18,0.1,0.27,0.11c1.6,0.3,3.24,0.23,4.79-0.21l0.04,0.98c0.01,0.38,0.32,0.68,0.69,0.69c1.44,0.04,2.88,0.18,4.3,0.43   c-0.09,1.24-0.14,2.49-0.14,3.72c0,0.26,0,0.64,0.21,1.01c0.23,0.4,0.61,0.6,0.86,0.73l4.09,2.18c-1.13,0.49-2.19,1.12-3.17,1.89   c-0.26,0.2-0.34,0.56-0.2,0.86l1.59,3.41L79.38,54.78z M92.17,34.98L78.1,23.22c-0.3-0.25-0.75-0.21-1,0.09   c-0.25,0.3-0.21,0.75,0.09,1l12.68,10.6l-1.73,8.12c-0.31,1.46-1.15,2.74-2.35,3.61l-2.38,1.72c-1.64,1.18-3.83,1.21-5.49,0.14   l-0.28-0.58l-1.34-2.88c1.15-0.82,2.45-1.47,3.78-1.87c0.28-0.08,0.47-0.32,0.5-0.61s-0.12-0.56-0.37-0.7l-5.5-2.93   c-0.08-0.04-0.26-0.14-0.29-0.18c-0.02-0.05-0.02-0.23-0.02-0.31c0-1.41,0.06-2.83,0.18-4.24c0.03-0.36-0.21-0.69-0.57-0.76   c-1.48-0.3-2.99-0.48-4.5-0.55l-0.05-1.26c-0.01-0.23-0.13-0.44-0.32-0.57c-0.19-0.13-0.43-0.15-0.65-0.07   c-1.54,0.58-3.2,0.74-4.81,0.47c-0.38-0.26-1.56-1.07-2.88-1.94c-0.45-0.3-0.98-0.53-1.54-0.72l11.31-9.38   c0.88-0.73,2.03-1.06,3.16-0.89l5.31,0.78c0-0.01,0.01-0.01,0.01-0.02c0.07,0.04,0.16,0.06,0.24,0.07l11.57,1.09   c0.95,0.09,1.68,0.86,1.65,1.75L92.17,34.98z"></path>
                    <path fill="white" d="M42.82,66.93c0,3.14,4.22,5.68,5.78,5.68c1.93,0,5.78-2.55,5.78-5.68c0-3.14-2.59-4.21-5.78-4.21S42.82,63.79,42.82,66.93z   "></path>
                    </g>
                </g>
                <g id="text" transform="matrix(3.4499964766947078,0,0,3.4499964766947078,5.759000968664543,154.09402088699605)" fill="#999">
                    <path d="M11.84 10.12 l3.02 0 l-3.76 9.88 l-1.94 0 l-1.84 -4.78 c-0.62 1.66 -1.22 3.22 -1.8 4.78 l-1.96 0 l-3.78 -9.88 l3.04 0 l1.72 5.44 l1.7 -5.44 l2.18 0 l1.7 5.46 z M20.227708333333332 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M20.227708333333332 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M33.15541666666667 10.26 l-0.4 2.22 c-0.74 -0.32 -0.88 -0.26 -1.22 -0.26 c-1.2 0 -1.9 0.64 -1.9 2.22 l0 5.56 l-2.96 0 l0 -9.88 l2.96 0 l0 0.88 c0.38 -0.68 1.42 -1.02 2.08 -1.02 c0.62 0 0.98 0.02 1.44 0.28 z M40.103125 20 l-3.2 -4.06 c-0.08 0.08 -0.22 0.18 -0.34 0.28 l0 3.78 l-2.98 0 l0 -14.52 l2.98 0 l0 7.12 l2.84 -2.48 l4.42 0 l-4.78 4 c1.46 1.8 3.38 4.14 4.78 5.88 l-3.72 0 z M49.91083333333333 9.98 c2.9 0 4.82 2.18 4.82 5.1 s-2.12 5.08 -5.02 5.08 c-0.64 0 -1.72 -0.36 -2.04 -0.82 l0 0.66 l-2.96 0 l0 -14.52 l2.96 0 l0 5.34 c0.34 -0.5 1.62 -0.84 2.24 -0.84 z M49.51083333333333 17.92 c1.24 0 2.26 -1.28 2.26 -2.84 c0 -1.58 -1.02 -2.86 -2.26 -2.86 c-1.36 0 -2.24 1.54 -2.24 2.86 s0.9 2.84 2.24 2.84 z M56.17854166666666 15.76 l0 -5.64 l2.96 0 l0 5.64 c0 1.52 0.42 2.16 1.56 2.16 c1.2 0 1.9 -0.64 1.9 -2.16 l0 -5.64 l2.96 0 l0 9.88 l-2.96 0 l0 -0.9 c-0.56 0.7 -1.78 1.06 -2.64 1.06 c-2.78 0 -3.78 -1.32 -3.78 -4.4 z M69.80624999999999 13.24 c0 1.18 5 0.62 5 3.74 c0 2.04 -1.8 3.18 -4.04 3.18 c-1.42 0 -2.84 -0.7 -3.96 -1.82 l1.94 -1.94 c0.56 0.68 1.36 1.2 2.02 1.26 s1.22 -0.22 1.32 -0.52 c0.24 -0.76 -1.14 -0.8 -1.56 -0.92 c-1.58 -0.48 -3.42 -1.14 -3.42 -3.1 c0 -2.34 2.44 -3.14 3.66 -3.14 c1.4 0 2.82 0.64 3.96 1.8 l-1.92 1.92 c-0.52 -0.68 -1.42 -1.22 -2.04 -1.22 c-0.32 0 -0.96 0.12 -0.96 0.76 z M79.53395833333333 15.8 c0 0.72 -0.02 1.92 1.08 1.92 c0.54 0 0.88 -0.22 1.26 -0.5 l0 2.44 c-0.46 0.26 -1.02 0.5 -1.62 0.5 c-2.54 0 -3.68 -1.08 -3.68 -4.36 l0 -3.24 l-1.1 0 l0 -2.44 l1.1 0 l0 -2.84 l2.96 0 l0 2.84 l2.34 0 l0 2.44 l-2.34 0 l0 3.24 z M93.54166666666666 15.08 l0 0.66 l-7.04 0 c0 1.16 1.18 1.98 2.16 1.98 c0.96 0 1.84 -0.38 2.3 -1.22 l1.98 1.82 c-0.8 1.08 -2.02 1.84 -4.28 1.84 c-3.24 0 -5.22 -2.16 -5.22 -5.08 s1.92 -5.1 5.04 -5.1 s5.06 2.14 5.06 5.1 z M86.56166666666667 13.86 l3.88 0 c-0.16 -0.94 -0.84 -1.44 -1.96 -1.44 c-1.08 0 -1.74 0.58 -1.92 1.44 z M101.22937499999999 10.26 l-0.4 2.22 c-0.74 -0.32 -0.88 -0.26 -1.22 -0.26 c-1.2 0 -1.9 0.64 -1.9 2.22 l0 5.56 l-2.96 0 l0 -9.88 l2.96 0 l0 0.88 c0.38 -0.68 1.42 -1.02 2.08 -1.02 c0.62 0 0.98 0.02 1.44 0.28 z"></path>
                </g>
            </svg>

            <div className="mx-auto flex flex-row gap-2">
                <Badge variant="outline">beautiful</Badge>
                <Badge variant="outline">graceful</Badge>
                <Badge variant="outline">efficient</Badge>
                <Badge variant="outline">fast</Badge>
                <Badge variant="outline">focused</Badge>
            </div>

            <Button
                onClick={() => router.push(PATH_TO_QUOTATIONS)}
                variant={"outline"}
                className={
                    "mx-auto max-w-max " +
                    "hover:bg-destructive hover:animate-pulse hover:border-0 "
                    }>
                <span className="p-5 md:text-md xl:text-lg">start!</span>
            </Button>
        </div>
    );
}
