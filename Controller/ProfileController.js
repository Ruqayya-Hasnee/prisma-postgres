import prisma from "../DB/db.config.js";

export const createProfile = async (req, res) => {
    const { bio, userId } = req.body

    //create profile
    const newProfile = await prisma.profile.create({
        data: {
            bio: bio,
            userId: userId,
        }
    })

    return res.json({
        status: 200,
        data: newProfile,
        msg: "profile created successfully"
    })
}


// get all profiles
export const fetchProfiles = async (req, res) => {
    const profiles = await prisma.profile.findMany({
        include: {
            user: true
        }
    })

    return res.json({
        status: 200,
        data: profiles
    })
}

// update profile
export const updateProfile = async (req, res) => {
    const profileId = req.params.id
    const { bio } = req.body

    const updatedProfile = await prisma.profile.update({
        where: {
            id: Number(profileId)
        },
        data: {
            bio
        }
    })

    return res.json({
        status: 200,
        data: updatedProfile,
        msg: "profile updated successfully"
    })
}

//delete profile
export const deleteProfile = async (req, res) => {
    const profileId = req.params.id
    await prisma.profile.delete({
        where: {
            id: Number(profileId)
        },
    })

    return res.json({
        status: 200,
        msg: "profile deleted successfully"
    })
}
