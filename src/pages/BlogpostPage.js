import React from 'react';
import {Link, useParams} from 'react-router-dom';
import posts from '../data/posts.json';

const BlogpostPage = () => {

    const {blogId} = useParams();
    const check = posts.find(post => {
        return post.id === blogId
    })

    return (
        <>
         <article>
            <h1>{check.title}</h1>
            <h3>{check.date}</h3>
            <p>{check.content}</p>
         </article>
            <Link to="/">Terug naar Home</Link>
        </>
    );
};

export default BlogpostPage;