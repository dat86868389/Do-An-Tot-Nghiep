import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import useSWR from 'swr';
import PaggingStytle from '../styles/pagging_client.module.css';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientPagging({
    currentPage,
    subDomain,
    totalPages
}) {
    
    return (
        <div className="row pagging-container">
            <div className="col-12">
                <center>
                    {handleRenderPages(currentPage,
                        totalPages,
                        subDomain
                    )}
                </center>
            </div>

        </div>
    )
}



function handleRenderPages(currentPage, totalPages, subDomain) {
    let leftSide = 2;
    let rightSide = 2;
    let midSide = 3;
    let _currentPage = parseInt(currentPage);
    let _totalPages = parseInt(totalPages);
    let jsx = [];

    if (_totalPages === 0) {
        return;
    }

    if (_totalPages <= leftSide + rightSide + midSide) {
        if (_currentPage <= 1) {
            jsx.push(<span className={`${PaggingStytle.span}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </span>);
        }
        else {
            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`} className={`${PaggingStytle.link}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);
        }
        for (let i = 1; i <= _totalPages; i++) {
            if (i == _currentPage) {
                jsx.push(<span className={`${PaggingStytle.span} ${PaggingStytle.active}`}>
                    {i}
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${i}`}
                    className={`${PaggingStytle.link}`}
                >
                    {i}
                </Link>);
            }
        }

        if (_currentPage == _totalPages) {
            jsx.push(<span className={`${PaggingStytle.span}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>);
        }
        else {
            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}
                className={`${PaggingStytle.link}`}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);
        }
    }


    else {
        if (_currentPage <= leftSide + midSide - 1) {
            if (_currentPage <= 1) {
                jsx.push(<span >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}
                    className={`${PaggingStytle.link}`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>);
            }
            for (let i = 1; i <= leftSide + midSide; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${PaggingStytle.span} ${PaggingStytle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}
                        className={`${PaggingStytle.link}`}
                    >
                        {i}
                    </Link>);
                }
            }
            jsx.push(<span className={``}>
                ...
            </span>);
            for (let i = _totalPages - rightSide + 1; i <= _totalPages; i++) {
                jsx.push(<Link href={`${subDomain}${i}`}
                    className={`${PaggingStytle.link}`}
                >
                    {i}
                </Link>);
            }
            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);

            return jsx;
        }

        if (_currentPage > leftSide + midSide - 1 && _currentPage < _totalPages - rightSide - midSide + 1) {
            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}
                className={`${PaggingStytle.link}`}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);

            for (let i = 1; i <= leftSide; i++) {
                jsx.push(<Link href={`${subDomain}${i}`}
                    className={`${PaggingStytle.link}`}
                >
                    {i}
                </Link>);
            }

            jsx.push(<span className={`${PaggingStytle.span}`}>
                ...
            </span>);

            for (let i = _currentPage - 1; i <= _currentPage + 1; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${PaggingStytle.span} ${PaggingStytle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}
                        className={`${PaggingStytle.link}`}
                    >
                        {i}
                    </Link>);
                }
            }

            jsx.push(<span className={`${PaggingStytle.span}`}>
                ...
            </span>);

            for (let i = _totalPages - rightSide + 1; i <= _totalPages; i++) {

                jsx.push(<Link href={`${subDomain}${i}`}
                    className={`${PaggingStytle.link}`}
                >
                    {i}
                </Link>);

            }

            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}
                className={`${PaggingStytle.link}`}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);
        }

        if (_currentPage >= _totalPages - (midSide + rightSide - 1) && _currentPage <= _totalPages) {

            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}
                className={`${PaggingStytle.link}`}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);

            for (let i = 1; i <= leftSide; i++) {

                jsx.push(<Link href={`${subDomain}${i}`}
                    className={`${PaggingStytle.link}`}
                >
                    {i}
                </Link>);
            }

            jsx.push(<span className={`${PaggingStytle.span}`}>...</span>);

            for (let i = _totalPages - midSide - rightSide + 1; i <= _totalPages; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${PaggingStytle.span} ${PaggingStytle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}
                        className={`${PaggingStytle.link}`}
                    >
                        {i}
                    </Link>);
                }
            }

            if (_currentPage == _totalPages) {
                jsx.push(<span className={`${PaggingStytle.span}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}
                    className={`${PaggingStytle.link}`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>);
            }
        }
    }



    return jsx;
}



