'use client';

// https://en.wikipedia.org/wiki/Work_breakdown_structure

import Image from 'next/image';
import { Button } from './ui/button';
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {Package} from "lucide-react";
import { Badge } from './ui/badge';

type DogSize = "xs" | "s" | "m" | "l" | "xl";
const TINY_DOG: DogSize = "xs";
const SMALL_DOG: DogSize = "s";
const MEDIUM_DOG: DogSize = "m";
const LARGE_DOG: DogSize = "l";
const HUGE_DOG: DogSize = "xl";
const dogSizes = [TINY_DOG, SMALL_DOG, MEDIUM_DOG, LARGE_DOG, HUGE_DOG];

const dogSizeImageUrls = new Map<DogSize, string>();
dogSizeImageUrls.set("xs", "https://cdn-icons-png.flaticon.com/512/4780/4780984.png");
dogSizeImageUrls.set("s", "https://cdn-icons-png.flaticon.com/512/4780/4780980.png");
dogSizeImageUrls.set("m", "https://cdn-icons-png.flaticon.com/512/4780/4780952.png");
dogSizeImageUrls.set("l", "https://cdn-icons-png.flaticon.com/512/4781/4781006.png");
dogSizeImageUrls.set("xl", "https://cdn-icons-png.flaticon.com/512/427/427560.png");

const XS_PIC = 20;
const S_PIC = 25;
const M_PIC = 30;
const L_PIC = 35;
const XL_PIC = 40;

const dogImageSizes = new Map<DogSize, number>();
dogImageSizes.set("xs", S_PIC);
dogImageSizes.set("s",S_PIC);
dogImageSizes.set("m",S_PIC);
dogImageSizes.set("l",S_PIC);
dogImageSizes.set("xl",S_PIC);

const dogSizeLegends = new Map<DogSize, string>();
dogSizeLegends.set("xs", "tiny dog");
dogSizeLegends.set("s", "small dog");
dogSizeLegends.set("m", "medium dog");
dogSizeLegends.set("l", "large dog");
dogSizeLegends.set("xl", "huge/unknown dog");

class Dog {
    static imageUrl(size: DogSize): string {
        if (!dogSizeImageUrls.has(size)) {
            return "";
        } else {
            return dogSizeImageUrls.get(size) || "";
        }
    }

    static imageSize(size: DogSize): number {
        if (!dogImageSizes.has(size)) {
            return 0;
        } else {
            return dogImageSizes.get(size) || 0;
        }
    }
}

const fxFlags = new Map<isoCurrencyCode, string>();
fxFlags.set("USD", "🇺🇸");
fxFlags.set("EUR", "🇪🇺");
fxFlags.set("CAD", "🇨🇦");
fxFlags.set("GBP", "🇬🇧");
fxFlags.set("UYU", "🇺🇾");

const fxRates = new Map<isoCurrencyCode, number>();
fxRates.set("USD", 1);
fxRates.set("EUR", 0.93);
fxRates.set("CAD", 1.35);
fxRates.set("GBP", 0.79);
fxRates.set("UYU", 39.12);

type isoCurrencyCode = "USD" | "EUR" | "GBP" | "CAD" | "UYU";

// type TaskSize = "tiny" | "small" | "medium" | "large" | "huge";

class Task {
    id: string;
    description: string;
    size: DogSize; // TaskSize;
    constructor(
        id: string,
        description: string,
        size: DogSize, // TaskSize
    ) {
        this.id = id;
        this.description = description;
        this.size = size;
    }
}
class Deliverable {
    id: string;
    name: string;
    description: string;
    tasks: Task[];
    constructor(
        id: string,
        name: string,
        description: string,
        tasks: Task[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }

    hours(): number {
        let totalHours = 0;
        this.tasks.forEach((task) => {
            totalHours += dogImageSizes.get(task.size) || 0;
        });
        return totalHours;
    }
}

function getDogSizeToHours(size: DogSize): number {
    return dogImageSizes.get(size) || 0;
}

function getDogSizeCostAsString(size: DogSize, hourlyRate: number, currency: isoCurrencyCode): string {
    return formatCurrencyNumber((dogImageSizes.get(size) || 0) * hourlyRate, currency);
}

class projectWBS {
    id: string;
    projectId: string;
    projectName: string;
    description: string;
    clientId: string;
    clientName: string;
    hourlyRate: number;
    currency: isoCurrencyCode;
    phase: string;
    deliverables: Deliverable[];
    constructor(
        id: string,
        projectId: string,
        projectName: string,
        description: string,
        clientId: string,
        clientName: string,
        hourlyRate: number,
        currency: isoCurrencyCode = "USD",
        phase: string,
        deliverables: Deliverable[]
    ) {
        this.id = id;
        this.projectId = projectId;
        this.projectName = projectName;
        this.description = description;
        this.clientId = clientId;
        this.clientName = clientName;
        this.hourlyRate = hourlyRate;
        this.currency = currency;
        this.phase = phase;
        this.deliverables = deliverables;
    }

    totalHours(): number {
        let totalHours = 0;
        this.deliverables.forEach((deliverable) => {
            totalHours += deliverable.hours();
        });
        return totalHours;
    }
}

const MASTER_HOURLY_RATE = 34;
const MASTER_HOURLY_RATE_CURRENCY_CODE = "CAD";

const currentYear = new Date().getFullYear();
const {id: projectId, name: projectName} = generateRandomProjectName();
const {id: clientId, name: clientName} = generateRandomClientIdAndName();
const phaseNr = pad(Math.floor(Math.random() * 10 + 1), 2);
const wbs = new projectWBS(
    currentYear + "-" + pad(Math.floor(Math.random() * 100 + 1), 4),
    projectId,
    projectName,
    "Phase " + phaseNr,
    clientId,
    clientName,
    MASTER_HOURLY_RATE,
    MASTER_HOURLY_RATE_CURRENCY_CODE,
    "P" + phaseNr,
    generateRandomDeliverables()
);

const formatNumber = (number: number) => Intl.NumberFormat('en-CA').format(number);

const formatCurrencyNumber = (number: number, currency: isoCurrencyCode | null) =>
    (currency ? fxFlags.get(currency) + "  " + currency : "") + " " +
    formatNumber(number);

export default function DynamicHero() {
    const totalHours = wbs.totalHours();
    return(
        <div className="flex flex-col gap-3 m-3">
            <div className="flex flex-row justify-around">
                <Card>
                    <CardHeader>
                        <CardDescription>
                            <table>
                                <tr>
                                    <td className='w-24 text-right mt-2 pr-3'><Badge variant="outline">{wbs.clientId}</Badge></td>
                                    <td>{wbs.clientName}</td>
                                </tr>
                                <tr>
                                    <td className='w-24 text-right mt-2 pr-3'><Badge variant="outline">{wbs.projectId}</Badge></td>
                                    <td>{wbs.projectName}</td>
                                </tr>
                                <tr>
                                    <td className='w-24 text-right mt-2 pr-3'><Badge variant="outline">{wbs.phase}</Badge></td>
                                    <td className='text-xl text-primary'><CardTitle>{wbs.description}</CardTitle></td>
                                </tr>
                            </table>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p><span className='font-extrabold text-xl'>{formatCurrencyNumber(totalHours * wbs.hourlyRate, wbs.currency)}</span></p>
                        <p><Badge variant="outline">{totalHours} hs</Badge> <Badge variant="outline">{wbs.currency}</Badge> <Badge variant="outline">{wbs.hourlyRate} per hour</Badge></p>
                        <div className='mt-3 flex gap-2'>
                            {Array.from(fxRates.keys()).map(
                                function(key) {
                                    if (key === wbs.currency) return null;
                                    return (
                                        <Badge key={key} variant="secondary">{
                                            fxRates.get(key) && 
                                            formatCurrencyNumber(
                                                fxConvertAmount(
                                                    (totalHours * wbs.hourlyRate),
                                                    wbs.currency,
                                                    key
                                                ) || 0,
                                                key
                                            )
                                        }
                                    </Badge>
                                    )
                                }
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant='destructive' size={"sm"} className='ml-auto'>new deliverable</Button>
                    </CardFooter>
                </Card>
            </div>

            <div className='container flex flex-row justify-center align-top gap-3'>
                {wbs.deliverables.map((deliverable, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                        <Card key={index} className='bg-slate-950'>
                            <CardHeader>
                                <CardTitle><Package className='inline-flex mr-2' />{deliverable.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <p>{deliverable.description}</p>
                                    <p>{deliverable.hours()} hs</p>
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant='destructive' size={'sm'} className='ml-auto'>new task</Button>
                            </CardFooter>
                        </Card>


                        <div className='flex flex-col gap-3'>
                            {deliverable.tasks.map((task, index) => (
                                <Card key={index} className='bg-secondary'>
                                    <CardHeader className="flex flex-row gap-2 align-bottom">
                                        <DogPic dogSize={task.size}/>
                                        <CardTitle>{task.description}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='flex flex-row flex-wrap gap-1'>
                                            <Badge>{dogSizeLegends.get(task.size)}</Badge>
                                            <Badge>{getDogSizeToHours(task.size)} hs</Badge>
                                            <Badge>{getDogSizeCostAsString(task.size, wbs.hourlyRate, wbs.currency)}</Badge>
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
}

function fxConvertAmount(amount: number, from: isoCurrencyCode, to: isoCurrencyCode) {
    if (from === to) {
        return amount;
    }
    const fromAmount = fxRates.get(from) || 0;
    const toAmount = fxRates.get(to) || 0;
    if (!fromAmount || !toAmount) {
        return null;
    }
    return Math.floor(amount * fromAmount / toAmount);
}
function DogPic({dogSize}: {dogSize: DogSize | undefined}) {
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

function generateRandomTaskDescription(): string {
    const verbs = [
      "Complete",
      "Review",
      "Prepare",
      "Develop",
      "Implement",
      "Analyze",
      "Discuss",
      "Validate",
      "Deploy",
      "Optimize",
      "Create",
      "Debug",
      "Refactor",
      "Document",
      "Schedule",
      "Coordinate",
      "Architect",
      "Assess",
      "Configure",
      "Monitor"
    ];
    const nouns = [
      "the report",
      "the code",
      "for the meeting",
      "the new feature",
      "the component",
      "the project plan",
      "the user interface",
      "the database",
      "the performance",
      "the security",
      "the infrastructure",
      "the test cases",
      "the requirements",
      "the prototype",
      "the release",
      "the sprint",
      "the backlog",
      "the architecture",
      "the integration",
      "the documentation"
    ];
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomNounIndex = Math.floor(Math.random() * nouns.length);
    return `${verbs[randomVerbIndex]} ${nouns[randomNounIndex]}`;
  }

  function generateRandomProjectName(): {id: string, name: string} {
      const aHundredColorNames = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Gray", "Light Blue", "Light Green", "Light Orange", "Light Pink", "Light Purple", "Light Red", "Light Yellow"];
      const aHubdredAnimalNames = ["Cat", "Dog", "Elephant", "Giraffe", "Horse", "Lion", "Monkey", "Panda", "Penguin", "Rabbit", "Tiger", "Zebra"];
      return ({
          id: "P-" + pad(Math.floor(Math.random() * 100) + 1, 4),
          name: "Project " + aHundredColorNames[Math.floor(Math.random() * aHundredColorNames.length)] + " " + aHubdredAnimalNames[Math.floor(Math.random() * aHubdredAnimalNames.length)]
      });
  }

  function generateRandomDogSize(): DogSize {
    return dogSizes[Math.floor(Math.random() * dogSizes.length)];
  }

  function generateRandomTasks(): Task[] {
    const tasks: Task[] = [];
    const nROfResults = Math.floor(Math.random() * 7) + 1;
    for (let i = 0; i < nROfResults; i++) {
      tasks.push(new Task("id" + i, generateRandomTaskDescription(), generateRandomDogSize()));
    }
    return tasks;
  }

  function generateRandomDeliverables(): Deliverable[] {
    const deliverables: Deliverable[] = [];
    const nROfResults = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < nROfResults; i++) {
      deliverables.push(new Deliverable(
        "id" + i,
        generateRandomTaskDescription(),
        "description",
        generateRandomTasks()
    ));
    }
    return deliverables;
  }

  function pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function generateRandomClientIdAndName() {
    const fruitNames = ["Apple", "Banana", "Orange", "Pear", "Strawberry", "Watermelon", "Grape", "Pineapple", "Cherry", "Peach", "Plum", "Cucumber", "Carrot", "Broccoli", "Cauliflower", "Spinach", "Eggplant", "Potato", "Tomato"];
    const legalForms = ["Limited", "LLC", "Corp", "Inc", "LLP", "Group"];
    return ({
        id: "C-" + pad(Math.floor(Math.random() * 100) + 1, 4),
        name: fruitNames[Math.floor(Math.random() * fruitNames.length)] + " " + legalForms[Math.floor(Math.random() * legalForms.length)]
    });
}