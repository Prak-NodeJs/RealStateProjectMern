import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json("user created successfully")

    } catch (error) {
        next(error)
    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body

    try {

        const validUser = await User.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User not found'))
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(404, 'Invalid Crendentials'))

        const { password: pass, ...userInfo } = validUser._doc;
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(userInfo)

    } catch (error) {
        next(error)
    }
}