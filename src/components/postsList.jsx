import React from "react"

const PostsList = ({posts}) => {
    return (
     <>
        {posts.map(post => <h2 key={post.id}>{post.label}</h2>)}
    </>
    )
}

export default PostsList