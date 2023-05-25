import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AdminPaginationStyle from "../styles/admin_pagination.module.css";
import { useRouter } from "next/router";


export default function AdminPaginationComponent({
    currentPage,
    totalPages,
    subDomain
}) {
    console.log(currentPage, totalPages);
    return (
        <div className={`${AdminPaginationStyle.admin_pagination}`}>
            {handleRenderPages(currentPage, totalPages, subDomain)}
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


    if (_totalPages <= leftSide + rightSide + midSide) {
        if (_currentPage <= 1) {
            jsx.push(<span className={`${AdminPaginationStyle.disable}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </span>);
        }
        else {
            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);
        }
        for (let i = 1; i <= _totalPages; i++) {
            if (i == _currentPage) {
                jsx.push(<span className={`${AdminPaginationStyle.active}`}>
                    {i}
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${i}`}>
                    {i}
                </Link>);
            }
        }

        if (_currentPage == _totalPages) {
            jsx.push(<span className={`${AdminPaginationStyle.disable}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>);
        }
        else {
            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);
        }
    }


    else {
        if (_currentPage <= leftSide + midSide - 1) {
            if (_currentPage <= 1) {
                jsx.push(<span className={`${AdminPaginationStyle.disable}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>);
            }
            for (let i = 1; i <= leftSide + midSide; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${AdminPaginationStyle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}>
                        {i}
                    </Link>);
                }
            }
            jsx.push(<span className={``}>
                ...
            </span>);
            for (let i = _totalPages - rightSide + 1; i <= _totalPages; i++) {
                jsx.push(<Link href={`${subDomain}${i}`}>
                    {i}
                </Link>);
            }
            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);

            return jsx;
        }

        if (_currentPage > leftSide + midSide - 1 && _currentPage < _totalPages - rightSide - midSide + 1) {
            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);

            for (let i = 1; i <= leftSide; i++) {
                jsx.push(<Link href={`${subDomain}${i}`}>
                    {i}
                </Link>);
            }

            jsx.push(<span>
                ...
            </span>);

            for (let i = _currentPage - 1; i <= _currentPage + 1; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${AdminPaginationStyle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}>
                        {i}
                    </Link>);
                }
            }

            jsx.push(<span>
                ...
            </span>);

            for (let i = _totalPages - rightSide + 1; i <= _totalPages; i++) {

                jsx.push(<Link href={`${subDomain}${i}`}>
                    {i}
                </Link>);

            }

            jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>);
        }

        if (_currentPage >= _totalPages - (midSide + rightSide - 1) && _currentPage <= _totalPages) {

            jsx.push(<Link href={`${subDomain}${_currentPage - 1}`}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>);

            for (let i = 1; i <= leftSide; i++) {

                jsx.push(<Link href={`${subDomain}${i}`}>
                    {i}
                </Link>);
            }

            jsx.push(<span>...</span>);

            for (let i = _totalPages - midSide - rightSide + 1; i <= _totalPages; i++) {
                if (i == _currentPage) {
                    jsx.push(<span className={`${AdminPaginationStyle.active}`}>
                        {i}
                    </span>);
                }
                else {
                    jsx.push(<Link href={`${subDomain}${i}`}>
                        {i}
                    </Link>);
                }
            }

            if (_currentPage == _totalPages) {
                jsx.push(<span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>);
            }
            else {
                jsx.push(<Link href={`${subDomain}${_currentPage + 1}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>);
            }
        }
    }



    return jsx;
}