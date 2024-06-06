import React from 'react';
import { Blogs } from '../contents/data/blogs/blogs';

import Link from 'next/link';
import BlogItem from '../components/BlogItem';

const BlogsPage = () => {
    
    return (
        <div>
            {
                Blogs.map(blog=> <Link key={blog.id} href={`blogs/${blog.id}`}>
                <BlogItem title={blog.title} ></BlogItem>
                </Link>)
            }
        </div>
    );
};

export default BlogsPage;