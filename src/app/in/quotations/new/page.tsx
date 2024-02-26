import { ArrowLeftCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import { PATH_TO_QUOTATIONS } from '@/lib/constants';

export default async function Home({ params }: { params: any }) {
    try {
        return (
            <section className="p-3 flex flex-col gap-3 overflow-hidden w-[95%]">
                <CRUDActionsMenu actions={
                    [
                        {
                            icon: <ArrowLeftCircle/>,
                            label: "back to list",
                            url: PATH_TO_QUOTATIONS,
                        }
                    ]
                }/>
                <h1>Adding new quotation</h1>
            </section>
        );

    } catch (e) {
        console.log("🤦 There was an error...");
        console.error(e);
        return <div>🤦 Oh no there was an error!</div>;
    }
}
