import { useEffect, useState } from 'react';
import PersonalPostStyle from '../styles/pesonal_posts_component.module.css';
import Link from 'next/link';


export default function HistoryComponent({ idUser }) {
    const [history, setHistory] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/history/get/${idUser}`)
        .then((response) => response.json())
        .then(e=> {
            setHistory(e);
        })
    }, [])

    return (
        <div className={`row ${PersonalPostStyle.container}`}>
            <h1>Các bài viết đã xem</h1>
            {
                history?.result.map((e) => (
                    <div className={`col-3 ${PersonalPostStyle.items}`}>
                        <div className={PersonalPostStyle.thumbnail}>
                            <Link href={`/posts/${e.PostId}`}>
                                <img src={`${e.Thumnail}`} />
                            </Link>
                        </div>

                        <div className='content'>
                            <h3>{e.Title}</h3>
                            <p>{e.description}</p>
                            <p>Ngày xem: {handleRenderDate(e.date)}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}


function handleRenderDate(time) {
    const dateString = time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours();
    const minute = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes();
    const second = dateObject.getSeconds() < 10 ? `0${dateObject.getSeconds()}` : dateObject.getSeconds();
    
    return `${date}-${month}-${year} ${hour}:${minute}:${second}`;

}