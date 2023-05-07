import { useEffect, useRef, useState } from 'react';
import PersonalPostStyle from '../styles/pesonal_posts_component.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUser from '@/lib/useUser';

export default function PesonalPostsComponent(props) {
    const {user} = useUser();
    const router = useRouter();
    const pesonnalPostsRef = useRef();
    const [pesonalPosts, setpesonalPosts] = useState();

    async function handleDeltePost(id, index) {
        const notice = "Bạn muốn xóa bài này không?";
        if(confirm(notice) == true) {
            await fetch(`http://localhost:3001/posts/delete/${id}`, {
                method: 'DELETE'
            })
                .then(() => {
                    pesonalPosts.result.splice(index, 1);
                    setpesonalPosts(pesonalPosts);
                    router.replace(`/personal_post/${props.id}`);
                })
                .catch(err => {
                    alert('xóa thất bại');
                })
        }
    }


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
                pesonalPosts?.result.map((e, index) => (
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
                            <Link href={`/update_post/${e.PostId}?userId=${user.userId}`}>Sửa</Link>
                            <button onClick={() => handleDeltePost(e.PostId, index)}>Xóa</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

