import prisma from "../DB/db.config.js";

//create user
export const createUser = async (req, res) => {
    const { name, email, password, phone } = req.body

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({
            status: 400,
            message: "Email already taken, try another plz"
        })
    }

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
            phone: phone,
        }
    })

    return res.json({
        status: 200,
        data: newUser,
        msg: "user created successfully"
    })
}


// get all users
export const fetchUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            post: true
        }
    })

    return res.json({
        status: 200,
        data: users
    })
}


// update user
export const updateUser = async (req, res) => {
    const userId = req.params.id
    const { name, email, password } = req.body

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            name,
            email,
            password
        }
    })

    return res.json({
        status: 200,
        data: updatedUser,
        msg: "user updated successfully"
    })
}

//delete user
export const deleteUser = async (req, res) => {
    const userId = req.params.id
    await prisma.user.delete({
        where: {
            id: Number(userId)
        },
    })

    return res.json({
        status: 200,
        msg: "user deleted successfully"
    })
}