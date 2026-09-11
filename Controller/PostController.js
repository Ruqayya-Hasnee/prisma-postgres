import prisma from "../DB/db.config.js";

//create post
export const createPost = async (req, res) => {
    const { title, content, userId } = req.body

    const newPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
            user: {
                connect: {
                    id: Number(userId)
                }
            }
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
    const posts = await prisma.post.findMany({
        include: {
            user: true
        }
    })

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

//bulk delete
export const bulkDelete = async (req, res) => {
    const { ids } = req.body
    const deletedPosts = await prisma.post.deleteMany({
        where: {
            id: { in: ids }
        },
    })

    return res.json({
        status: 200,
        data: deletedPosts,
        msg: "bulk of posts deleted successfully"
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

//update bulk records
export const bulkUpdate = async (req, res) => {
    const updatedPosts = await prisma.post.updateMany({
        where: {
            title: ("Post")
        },
        data: {
            content: "Updated post content"
        }
    })

    return res.json({
        status: 200,
        data: updatedPosts,
        msg: "multiple posts updated successfully"
    })
}

// filtering and sorting
export const filterAndSortPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        where: {
            title: {
                contains: "Post"
            }
        },
        orderBy: {
            id: "desc"
        }
    })

    return res.json({
        status: 200,
        data: posts,
        msg: "filtered and sorted posts"
    })
}