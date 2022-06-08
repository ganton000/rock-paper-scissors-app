import prisma from '../prisma/prisma';
import {Request, Response} from 'express';
import {payload} from '../utils/authUtils'

const updateScore = async  (req:Request, res:Response) => {
    const {score,won,lost} = req.body;
    let newData = {
        score,
        won,
        lost,
    }
    await prisma.user.update({
        where: {
            userId: payload.userId
        },
        data: newData
        
    })
    res.status(201).json({
        success: true,
        message: 'Score updated successfully'
    })
}

export {updateScore}