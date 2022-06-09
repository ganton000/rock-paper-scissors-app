import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma/prisma';
import 'dotenv/config';
const { verify, sign } = require('jsonwebtoken');

const payload = { userId: " " };

const authUtils = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization!.split(' ')[1]!;
        verify(token, process.env.JWT_SECRET, (error:any,decoded: any) => {
            if (error) {
                res.status(401).json({
                    success: false,
                    message: error
                })
            };
            const valid = prisma.user.findUnique({
                where: {
                    userId: decoded.userId,
                }
            })
            if (valid !== null) {
                payload.userId = decoded.userId;
                next();
            }
        })
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: error
        })
    }

}


const createAccessToken = (userId: String) => {
    return sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15min' })
}


const createRefreshToken = (userId: String) => {
    return sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export { createAccessToken, createRefreshToken, authUtils, payload };