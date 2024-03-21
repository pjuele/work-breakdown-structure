import AppTitle from '@/components/boilerplate/AppTitle.cli';
import prisma from '../../../lib/prisma';
import ClientFormDialog from './ClientFormDialog.cli';
import ClientList from './ClientList.cli';

async function getData() {
    const clients = await prisma.client.findMany();
    return clients;
}

export default async function Home() {
    const clients = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <div className="flex flex-row gap-5 align-top justify-center mx-auto">
        <AppTitle size="lg" title="Clients" />
        <ClientFormDialog/>
      </div>
      <ClientList clients={clients}/>
    </section>
  );
}
