import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function pagging({
    currentPage
}) {
    const totalPages = 11;
    const midSide = 3;
    const leftSide = 2;
    const rightSide = 2;
    const recordsPerPage = 8;






    return (
        <div className="row pagging-container">
            <div className="offset-xl-3 col-xl-6 pagging-container_buttons">
                {handlePagging(currentPage, totalPages, leftSide, rightSide, midSide)}
            </div>
        </div>
    )

}


function handlePagging(currentPage, totalPages, leftSide, rightSide, midSide) {
    let arrayPages = [];
    let _currentPage = parseInt(currentPage)
    // totalPages < leftSide + rightSide + midSide
    if (totalPages <= (leftSide + rightSide + midSide)) {
        _currentPage == 1 ?
            arrayPages.push(<Link href={`/new_posts/1}`} className="pagging_buttons disable">
                <FontAwesomeIcon icon={faChevronLeft} /></Link>) :
            arrayPages.push(<Link href={`/new_posts/${_currentPage - 1}`}>
                <FontAwesomeIcon icon={faChevronLeft} /></Link>);
        for (let index = 1; index <= totalPages; index++) {
            if (index == currentPage) {
                arrayPages.push(<span className="active">{index}</span>);
            }
            else if (index > 0 && index <= totalPages) {
                arrayPages.push(<Link href={`/new_posts/${index}`}>{index}</Link>);
            }

        }
        _currentPage == totalPages ?
            arrayPages.push(<Link href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                <FontAwesomeIcon icon={faChevronRight} /></Link>) :
            arrayPages.push(<Link href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                <FontAwesomeIcon icon={faChevronRight} /></Link>)
    }

    else {
        if (currentPage < leftSide) {
            _currentPage == 1 ?
                arrayPages.push(<Link href={`/new_posts/1}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronLeft} /></Link>) :
                arrayPages.push(<Link href={`/new_posts/${_currentPage - 1}`}>
                    <FontAwesomeIcon icon={faChevronLeft} /></Link>);
            for (let i = 1; i <= leftSide; i++) {
                if (i == currentPage) {
                    arrayPages.push(<span className="active">{i}</span>)
                }
                else {
                    arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                }
            }
            arrayPages.push(<span>...</span>)
            for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
            }
            _currentPage == totalPages ?
                arrayPages.push(<Link href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronRight} /></Link>) :
                arrayPages.push(<Link href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                    <FontAwesomeIcon icon={faChevronRight} /></Link>)
        }

        if (currentPage >= leftSide && currentPage < totalPages - (rightSide + midSide) + 1) {
            if (currentPage <= leftSide + midSide) {
                _currentPage == 1 ?
                    arrayPages.push(<Link href={`/new_posts/1}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronLeft} /></Link>) :
                    arrayPages.push(<Link href={`/new_posts/${_currentPage - 1}`}>
                        <FontAwesomeIcon icon={faChevronLeft} /></Link>);
                let total = parseInt(parseInt(currentPage) + 1);
                for (let i = 1; i <= total; i++) {

                    if (i == currentPage) {
                        arrayPages.push(<span className="active">{i}</span>)
                    }
                    else {
                        arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                    }
                }
                arrayPages.push(<span>...</span>)
                for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                    arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                }
                _currentPage == totalPages ?
                    arrayPages.push(<Link href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronRight} /></Link>) :
                    arrayPages.push(<Link href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                        <FontAwesomeIcon icon={faChevronRight} /></Link>)
            }

            if (currentPage > (leftSide + midSide)) {

                _currentPage == 1 ?
                    arrayPages.push(<Link href={`/new_posts/1}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronLeft} /></Link>) :
                    arrayPages.push(<Link href={`/new_posts/${_currentPage - 1}`}>
                        <FontAwesomeIcon icon={faChevronLeft} /></Link>);
                for (let i = 1; i <= leftSide; i++) {
                    arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                }
                arrayPages.push(<span>...</span>)
                for (let i = _currentPage - 1; i <= _currentPage + midSide - 2; i++) {
                    if (i == currentPage) {
                        arrayPages.push(<span className="active">{i}</span>);
                    }
                    else {
                        arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                    }
                }
                arrayPages.push(<span>...</span>)
                for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                    arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                }
                _currentPage == totalPages ?
                    arrayPages.push(<Link href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronRight} /></Link>) :
                    arrayPages.push(<Link href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                        <FontAwesomeIcon icon={faChevronRight} /></Link>)
            }
        }

        if (currentPage >= totalPages - (rightSide + midSide) + 1 && currentPage <= totalPages) {

            _currentPage == 1 ?
                arrayPages.push(<Link href={`/new_posts/1}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronLeft} /></Link>) :
                arrayPages.push(<Link href={`/new_posts/${_currentPage - 1}`}>
                    <FontAwesomeIcon icon={faChevronLeft} /></Link>);
            for (let i = 1; i <= leftSide; i++) {
                arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
            }
            arrayPages.push(<span>...</span>)
            for (let i = _currentPage - ((midSide + rightSide - 1) - (totalPages - _currentPage)); i <= totalPages; i++) {
                if (i == _currentPage) {
                    arrayPages.push(<span className="active">{i}</span>);
                }
                else {
                    arrayPages.push(<Link href={`/new_posts/${i}`}>{i}</Link>);
                }
            }
            _currentPage == totalPages ?
                arrayPages.push(<Link href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronRight} /></Link>) :
                arrayPages.push(<Link href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                    <FontAwesomeIcon icon={faChevronRight} /></Link>)

        }

    }



    return arrayPages;
}