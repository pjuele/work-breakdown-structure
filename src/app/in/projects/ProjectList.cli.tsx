'use client';

import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Project } from "@prisma/client";

export default function ProjectList({ projects }: { projects: Project[] }) {
    projects.sort((a, b) => a.id.localeCompare(b.id));
    return (
        <Table className="min-w-max max-w-max mx-auto border-2 rounded-lg">
        <TableHeader>
            <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {projects.map((project) => (
            <TableRow key={project.id}>
                <TableCell className="p-3"><Badge variant={"secondary"}>{project.clientId}</Badge></TableCell>
                <TableCell className="p-3"><Badge variant={"secondary"}>{project.id}</Badge></TableCell>
                <TableCell className="p-3">{project.name}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
    );
}