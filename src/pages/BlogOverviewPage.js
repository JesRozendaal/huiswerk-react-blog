import React from 'react';
import posts from '../data/posts.json';
import {Link} from 'react-router-dom';

const BlogOverviewPage = () => {
    return (
        <>
            <h1>Blog overzichts pagina</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <section>
                <ul>
                    {posts.map((post) => {
                        return <li key={post.id}><Link to={`blogposts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </section>
        </>
    );
};

export default BlogOverviewPage;