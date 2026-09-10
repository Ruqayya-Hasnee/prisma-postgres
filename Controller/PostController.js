import prisma from "../DB/db.config.js";

export const createPost = async (req, res) => {
    const { title, content } = req.body

    //create post
    const newPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
        }
    })

    return res.json({
        status: 200,
        data: newPost,
        msg: "post created successfully"
    })
}


// get all posts
export const fetchPosts = async (req, res) => {
    const posts = await prisma.post.findMany({})

    return res.json({
        status: 200,
        data: posts
    })
}

// update post
export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { title, content } = req.body

    const updatedPost = await prisma.post.update({
        where: {
            id: Number(postId)
        },
        data: {
            title,
            content
        }
    })

    return res.json({
        status: 200,
        data: updatePost,
        msg: "post updated successfully"
    })
}

//delete post
export const deletePost = async (req, res) => {
    const postId = req.params.id
    await prisma.post.delete({
        where: {
            id: Number(postId)
        },
    })

    return res.json({
        status: 200,
        msg: "post deleted successfully"
    })
}