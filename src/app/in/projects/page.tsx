import AppTitle from '@/components/boilerplate/AppTitle.cli';
import prisma from '../../../lib/prisma';
import ProjectFormDialog from './ProjectFormDialog.cli';
import ProjectList from './ProjectList.cli';

async function getData() {
    const projects = await prisma.project.findMany({
        // where: { published: true },
        include: { client: true },
      });
    const clients = await prisma.client.findMany();
    return {projects, clients};
}

export default async function Home() {
    const { projects, clients } = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <div className="flex flex-row gap-5 align-top justify-center mx-auto">
        <AppTitle size="lg" title="Projects" />
        <ProjectFormDialog allClients={clients}/>
      </div>
      <ProjectList projects={projects}/>
    </section>
  );
}
