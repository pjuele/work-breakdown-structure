'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Client } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Image from "next/image";
import IdBadge from "@/components/IdBadge.cli";

export default function ClientList({ clients }: { clients: Client[] }) {
    clients.sort((a, b) => a.id.localeCompare(b.id));
    return (
        <Table className="min-w-max max-w-max mx-auto border-2 rounded-lg">
        <TableHeader>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {clients.map((client) => (
            <TableRow key={client.id}>
                <TableCell className="p-3"><IdBadge id={client.id} /></TableCell>
                <TableCell className="p-3">
                    <Avatar className="w-[25px] h-[25px]">
                        <AvatarImage src={client.logoUrl ?? "https://placehold.co/50x50/webp"} />
                        <AvatarFallback>{client.id}</AvatarFallback>
                    </Avatar>
                    {/* <Image
                        src={client.logoUrl ?? "https://placehold.co/50x50/webp"}
                        alt={client.name + " logo"}
                        width={30} height={30} /> */}
                </TableCell>
                <TableCell className="p-3">{client.name}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    );
}