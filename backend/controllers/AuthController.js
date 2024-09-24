const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/users');


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email wrong';

        // Check if user exists
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        // Check if the password matches
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: "Password is wrong please check", success: false });
        }

        // Generate JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            '123',
            process.env.JWT_SECRET,  // Ensure JWT_SECRET is set correctly
            { expiresIn: '24h' }
        );

        // Send success response
        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email: user.email,
            name: user.name
            
        });
    } catch (err) {
        console.error("Login error:", err);
        console.log("JWT Secret:", process.env.JWT_SECRET);
  // Log the error for debugging
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


module.exports = {
    signup,
    login
}