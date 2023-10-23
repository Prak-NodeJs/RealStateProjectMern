import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    console.log(hashedPassword)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()

    } catch (error) {
        res.status(500).json(error.message)
    }
    res.status(201).json("user created successfully")
}