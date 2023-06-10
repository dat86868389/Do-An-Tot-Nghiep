import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentStyle from '../styles/comments.module.css';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import useUser from '@/lib/useUser';
import { useEffect, useState } from 'react';
import useSWR from 'swr'

export default function CommentsComponent({ postId }) {
    const { user } = useUser();
    // fetch comments api
    const fetcher = url => fetch(url).then(r => r.json())
    const { data } = useSWR(`http://localhost:3001/comments/post/${postId}`,
        fetcher,
        { refreshInterval: 1000 }
    );

    //when user post comment
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

    return (
        <>
            <div className={`col-12 ${CommentStyle.container}`}>
                {
                    user?.isLoggedIn == false && (
                        <h1>Đăng nhập để tham gia bình luận</h1>
                    )
                }

                {
                    user?.isLoggedIn == true && (
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
                    )
                }



            </div>

            <div className='col-12'>
                <ul className={CommentStyle.comments_of_post}>
                    {
                        data?.result.map(c => {
                            if (user.isLoggedIn == true) {
                                return handleRender(c, user)
                            }
                        })
                    }
                </ul>
            </div>

        </>
    )

}



function handleRender(comment, user) {
    console.log(user);
    console.log(user.userId, comment.userId);
    console.log(user.userId == comment.userId)
    const dateString = comment.time;
    const dateObject = new Date(dateString);
    const date = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    const month = dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours();
    const minute = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes();
    const second = dateObject.getSeconds() < 10 ? `0${dateObject.getSeconds()}` : dateObject.getSeconds();

    return (
        <li key={comment._id}>
            <div className={CommentStyle.info_user}>
                {
                    user.userId == comment.userId && (
                        <button
                            className={`${CommentStyle.button_delete}`}
                            onClick={() => {
                                handleDeleteComment(comment._id)
                            }}
                        >
                            Xóa
                        </button>
                    )
                }
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


function handleDeleteComment(idComent) {
    let text = "Bạn muốn xóa bình luận này?";
    if (confirm(text) == true) {
        fetch(`http://localhost:3001/comments/delete/idComment/${idComent}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(r => {
                console.log(r);
            })
            .catch(() => {
                alert("Hệ Thống đã xảy ra lỗi!");
            })
    }
}
