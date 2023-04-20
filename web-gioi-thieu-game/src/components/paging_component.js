import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";








export default function pagging( {currentPage, totalPages}) {

    
    return(
        <div className="row pagging-container">
            <div className="offset-xl-3 col-xl-6 pagging-container_buttons">
                <Link href='1'><FontAwesomeIcon icon={faChevronLeft} /></Link>
                <Link href='2'>1</Link>
                <Link href='2'>2</Link>
                <span>...</span>
                <Link href='2'>6</Link>
                <span className="active">7</span>
                <Link href='2'>8</Link>
                <span>...</span>
                <Link href='2'>328</Link>
                <Link href='2'>329</Link>
                <Link href='1'><FontAwesomeIcon icon={faChevronRight} /></Link>
            </div>
        </div>
    )
}