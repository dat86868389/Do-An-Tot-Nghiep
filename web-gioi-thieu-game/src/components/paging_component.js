import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function pagging({
    currentPage
}) {
    const [totalRecords, settotalRecords] = useState('');
    const midSide = 3;
    const leftSide = 2;
    const rightSide = 2;
    const recordsPerPage = 8;
    useEffect(() => {
        fetch(`http://localhost:3001/posts/get/quantity`)
            .then(res => res.json())
            .then(e => {
                settotalRecords(e.result[0].quantity);
            })
    }, [])






    return (
        <>
            {
                totalRecords != '' && (
                    <div className="row pagging-container">
                        <div className="offset-xl-3 col-xl-6 pagging-container_buttons">
                            {handlePagging(currentPage,
                                Math.ceil(parseFloat(totalRecords) / recordsPerPage),
                                leftSide,
                                rightSide,
                                midSide)
                            }
                        </div>
                    </div>
                )
            }
        </>
    )

}


function handlePagging(currentPage, totalPages, leftSide, rightSide, midSide) {
    let arrayPages = [];
    let _currentPage = parseInt(currentPage)
    // totalPages < leftSide + rightSide + midSide
    if (totalPages <= (leftSide + rightSide + midSide)) {
        _currentPage == 1 ?
            arrayPages.push(<a href={`/new_posts/1}`} className="pagging_buttons disable">
                <FontAwesomeIcon icon={faChevronLeft} /></a>) :
            arrayPages.push(<a href={`/new_posts/${_currentPage - 1}`}>
                <FontAwesomeIcon icon={faChevronLeft} /></a>);
        for (let index = 1; index <= totalPages; index++) {
            if (index == currentPage) {
                arrayPages.push(<span className="active">{index}</span>);
            }
            else if (index > 0 && index <= totalPages) {
                arrayPages.push(<a href={`/new_posts/${index}`}>{index}</a>);
            }

        }
        _currentPage == totalPages ?
            arrayPages.push(<a href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                <FontAwesomeIcon icon={faChevronRight} /></a>) :
            arrayPages.push(<a href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                <FontAwesomeIcon icon={faChevronRight} /></a>)
    }

    else {
        if (currentPage < leftSide) {
            _currentPage == 1 ?
                arrayPages.push(<a href={`/new_posts/1}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronLeft} /></a>) :
                arrayPages.push(<a href={`/new_posts/${_currentPage - 1}`}>
                    <FontAwesomeIcon icon={faChevronLeft} /></a>);
            for (let i = 1; i <= leftSide; i++) {
                if (i == currentPage) {
                    arrayPages.push(<span className="active">{i}</span>)
                }
                else {
                    arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                }
            }
            arrayPages.push(<span>...</span>)
            for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
            }
            _currentPage == totalPages ?
                arrayPages.push(<a href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronRight} /></a>) :
                arrayPages.push(<a href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                    <FontAwesomeIcon icon={faChevronRight} /></a>)
        }

        if (currentPage >= leftSide && currentPage < totalPages - (rightSide + midSide) + 1) {
            if (currentPage <= leftSide + midSide) {
                _currentPage == 1 ?
                    arrayPages.push(<a href={`/new_posts/1}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronLeft} /></a>) :
                    arrayPages.push(<a href={`/new_posts/${_currentPage - 1}`}>
                        <FontAwesomeIcon icon={faChevronLeft} /></a>);
                let total = parseInt(parseInt(currentPage) + 1);
                for (let i = 1; i <= total; i++) {

                    if (i == currentPage) {
                        arrayPages.push(<span className="active">{i}</span>)
                    }
                    else {
                        arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                    }
                }
                arrayPages.push(<span>...</span>)
                for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                    arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                }
                _currentPage == totalPages ?
                    arrayPages.push(<a href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronRight} /></a>) :
                    arrayPages.push(<a href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                        <FontAwesomeIcon icon={faChevronRight} /></a>)
            }

            if (currentPage > (leftSide + midSide)) {

                _currentPage == 1 ?
                    arrayPages.push(<a href={`/new_posts/1}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronLeft} /></a>) :
                    arrayPages.push(<a href={`/new_posts/${_currentPage - 1}`}>
                        <FontAwesomeIcon icon={faChevronLeft} /></a>);
                for (let i = 1; i <= leftSide; i++) {
                    arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                }
                arrayPages.push(<span>...</span>)
                for (let i = _currentPage - 1; i <= _currentPage + midSide - 2; i++) {
                    if (i == currentPage) {
                        arrayPages.push(<span className="active">{i}</span>);
                    }
                    else {
                        arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                    }
                }
                arrayPages.push(<span>...</span>)
                for (let i = totalPages - rightSide + 1; i <= totalPages; i++) {
                    arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                }
                _currentPage == totalPages ?
                    arrayPages.push(<a href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                        <FontAwesomeIcon icon={faChevronRight} /></a>) :
                    arrayPages.push(<a href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                        <FontAwesomeIcon icon={faChevronRight} /></a>)
            }
        }

        if (currentPage >= totalPages - (rightSide + midSide) + 1 && currentPage <= totalPages) {

            _currentPage == 1 ?
                arrayPages.push(<a href={`/new_posts/1}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronLeft} /></a>) :
                arrayPages.push(<a href={`/new_posts/${_currentPage - 1}`}>
                    <FontAwesomeIcon icon={faChevronLeft} /></a>);
            for (let i = 1; i <= leftSide; i++) {
                arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
            }
            arrayPages.push(<span>...</span>)
            for (let i = _currentPage - ((midSide + rightSide - 1) - (totalPages - _currentPage)); i <= totalPages; i++) {
                if (i == _currentPage) {
                    arrayPages.push(<span className="active">{i}</span>);
                }
                else {
                    arrayPages.push(<a href={`/new_posts/${i}`}>{i}</a>);
                }
            }
            _currentPage == totalPages ?
                arrayPages.push(<a href={`/new_posts/${_currentPage}`} className="pagging_buttons disable">
                    <FontAwesomeIcon icon={faChevronRight} /></a>) :
                arrayPages.push(<a href={`/new_posts/${parseInt(currentPage) + 1}`} className="pagging_buttons">
                    <FontAwesomeIcon icon={faChevronRight} /></a>)

        }

    }
    return arrayPages;
}