import { ArrowLeftCircle } from 'lucide-react';
import CRUDActionsMenu from '@/components/CRUDActionsMenu.cli';
import { PATH_TO_QUOTATIONS } from '@/lib/constants';
import { DeliverableForm } from './DeliverableForm.cli';

export default async function Home({ params }: { params: any }) {
    try {
        if (!params.phaseId) return null;
        return (
            <section className="p-3 flex flex-col gap-3 overflow-hidden w-[95%]">
                <CRUDActionsMenu actions={
                    [
                        {
                            icon: <ArrowLeftCircle/>,
                            label: "back to quotation",
                            url: `${PATH_TO_QUOTATIONS}/${params.phaseId}`
                        }
                    ]
                }/>
                <DeliverableForm params={params} />
            </section>
        );

    } catch (e) {
        console.log("🤦 There was an error...");
        console.error(e);
        return <div>🤦 Oh no there was an error!</div>;
    }
}
