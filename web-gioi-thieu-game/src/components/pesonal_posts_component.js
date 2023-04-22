import { useEffect, useState } from 'react';
import PersonalPostStyle from '../styles/pesonal_posts_component.module.css';
import Link from 'next/link';

export default function PesonalPostsComponent(props) {
    const [pesonalPosts, setpesonalPosts] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/get_personal_posts/${props.id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setpesonalPosts(data);
            })
            .catch(() => {
                alert('server xay ra loi');
            });

    }, [])
    return (
        <div className={`row ${PersonalPostStyle.container}`}>
            {
                pesonalPosts?.result.map((e) => (
                    <div className={`col-3 ${PersonalPostStyle.items}`}>
                        <div className={PersonalPostStyle.thumbnail}>
                            <Link href={`/posts/${e.PostId}`}>
                                <img src={`${e.Thumnail}`} />
                            </Link>
                        </div>

                        <div className='content'>
                            <h3>{e.Title}</h3>
                            <p>{e.description}</p>
                            <p>Ngày đăng: {e.TimePost}</p>
                        </div>

                        <div className={PersonalPostStyle.buttons}>
                            <Link href='#'>Sửa</Link>
                            <button onClick={()=>handleDeltePost(e.PostId)}>Xóa</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function handleDeltePost(id) {
    fetch(`http://localhost:3001/posts/delete/${id}`, {
        method: 'DELETE'
    })
    .then(() =>{
        alert('xóa thành công');
    })
    .catch(err => {
        alert('xóa thất bại');
    })
}