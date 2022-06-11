import prisma from '../prisma/prisma';
import { Request, Response } from 'express';
import { payload } from '../utils/authUtils'

const updateScore = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { score, won, lost } = req.body;
    let newData = {
        score,
        won,
        lost,
    }
    await prisma.user.update({
        where: {
            userId: id,
        },
        data: newData

    })
    res.status(201).json({
        success: true,
        message: 'Score updated successfully'
    })
}

const fetchScore = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.findFirst({
        where: {
            userId: id
        }
    })
    res.status(200).json({
        success: true,
        message: "Score fetched successfully",
        score: user!.score,
        won: user!.won,
        lost: user!.lost
    })
}

const getAllUserDetails = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany({
        select: {
            firstName: true,
            lastName: true,
            username: true,
            score: true,
            lost: true,
            won: true,

        }
    });
    res.status(200).json({
        success: true,
        message: "users details fetched successfully",
        users
    })
}
export { updateScore, fetchScore, getAllUserDetails }