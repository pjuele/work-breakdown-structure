import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"

const BackToPhases = ({link, pageName}: {link: string, pageName: string}) => {
    return (
        <Link
            href={link}
            className="m-3 flex flex-row align-middle gap-2">
            <ArrowLeftCircle/>
            back to {pageName}
        </Link>
    )
}

export default BackToPhases