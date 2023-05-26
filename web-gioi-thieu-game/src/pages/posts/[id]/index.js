import { useRouter } from "next/router";
import Layout_Post from "../../../layouts/layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import CommentsComponent from "@/components/comments_component";
import CommentStyle from '../../../styles/comments.module.css';
import ReadPostComponent from "@/components/read_post_component";

export default function PostIndex() {
    const router = useRouter();
    if (router.isReady) {
        return (
            <Layout_Post>
                
                
                <ReadPostComponent 
                    idPost={router.query.id}
                />
    
    
            </Layout_Post>
        );
    }
   
}


