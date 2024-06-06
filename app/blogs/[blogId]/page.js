import { Blogs } from "@/app/contents/data/blogs/blogs";


export const generateStaticParams=()=>{
    return Blogs.map(blog=> ({
        blogId : blog.id
    }))

}

const SingleBlogs = ({params}) => {


    const {blogId}= params
    

    const blog= Blogs.find(blog => blogId === blog.id)
    const {title , description}= blog

    return (
        <div>
            <h1 className="text-blue-500"> {title}</h1>
            <p className="text-red 500">{description}</p>
           
        </div>
    );
};

export default SingleBlogs;