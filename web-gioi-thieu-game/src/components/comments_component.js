import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentStyle from '../styles/comments.module.css';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import useUser from '@/lib/useUser';
import { useEffect, useState } from 'react';

export default function CommentsComponent({ postId }) {
    const { user } = useUser();
    const [comments, setComments] = useState();
    function handleComment(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        formJson.userId = user.userId;
        formJson.userName = user.userName;
        formJson.postId = postId;
        formJson.time = Date.now();

        fetch('http://localhost:3001/comments/add', {
            method: 'POST',
            body: JSON.stringify(formJson),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(r => {
                console.log(r);
            })

        document.getElementById('input_comment').value = '';
    }

    useEffect(() => {
        console.log(postId);
        if (postId != undefined) {
            fetch(`http://localhost:3001/comments/post/${postId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setComments(data.result);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])

    return (
        <>
            <div className={`col-12 ${CommentStyle.container}`}>
                <form className={CommentStyle.form} method="post" onSubmit={handleComment}>
                    <textarea
                        placeholder='Tham gia bình luận'
                        required
                        name='comment'
                        id='input_comment'
                        className={CommentStyle.comment_box}
                    />

                    <button className={CommentStyle.button}>Đăng Bình luận</button>
                </form>


            </div>

            <div className='col-12'>
                <ul className={CommentStyle.comments_of_post}>
                    {
                        comments?.map(c => (
                            handleRender(c)
                        )


                        )
                    }


                </ul>
            </div>

        </>
    )

}



function handleRender(comment) {
    const dateString = comment.time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth()+1}` : dateObject.getMonth()+1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours();
    const minute = dateObject.getMinutes() < 10? `0${dateObject.getMinutes()}` : dateObject.getMinutes();
    const second = dateObject.getSeconds() < 10? `0${dateObject.getSeconds()}` : dateObject.getSeconds();

    return (
        <li key={comment._id}>
            <div className={CommentStyle.info_user}>
                <p className={CommentStyle.info_time}>
                    <span className={CommentStyle.info_user_name}>
                        {comment.userName}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faClock} /> {
                            `${date}-${month}-${year} | ${hour}h-${minute}m-${second}s`
                        }
                    </span>
                </p>

                <p className={CommentStyle.users_comments}>
                    {comment.comment}
                </p>
            </div>
        </li>
    )

}
