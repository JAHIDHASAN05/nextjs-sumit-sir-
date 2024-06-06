

const fecthPost= async()=>{
    await new Promise((resolve)=>{
        setTimeout(()=>{
         resolve()
        },2000)
    })
    return 'Here is my post'
}

const Post = async() => {
    const post = await fecthPost()
    console.log(post);
    return (
        <div>
            {post}
        </div>
    );
};

export default Post;