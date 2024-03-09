import prisma from '../../../lib/prisma';

async function getData() {
    const projects = await prisma.project.findMany({
        // where: { published: true },
        include: { client: true },
      });
      return projects;
}
export default async function Home() {
    const projects = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <h1>Projects</h1>
      {projects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
    </section>
  );
}
