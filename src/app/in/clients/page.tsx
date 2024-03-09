import prisma from '../../../lib/prisma';

async function getData() {
    const clients = await prisma.client.findMany();
      return clients;
}
export default async function Home() {
    const clients = await getData();
  return (
    <section className="p-3 flex flex-col gap-5 wrap">
      <h1>Clients</h1>
      {clients.map((client) => (
        <p key={client.id}>{client.name}</p>
      ))}
    </section>
  );
}
