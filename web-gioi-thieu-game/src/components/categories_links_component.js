import Link from "next/link";
import { useEffect, useState } from "react"



export default function CategoriesLinksComponent({ postID }) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/categories/get_by_post_id/${postID}`)
            .then(res => res.json())
            .then(data => {
                setData(data.result);
            })
    }, [])

    return (
        <>
            {
                data?.map(category => (
                    <Link href={`/categorie/${category.CategoryId}?page=1`}>
                        {category.CategoryName}
                    </Link>
                ))
            }
        </>

    )
}