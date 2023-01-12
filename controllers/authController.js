const User = require('../models/User')
const bcrypt = require("bcrypt");
const generateJWT = require('../helpers/jwt');


const authController = {};

authController.register =  async(req, res) =>{

    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Name, email, password are required"
            })
        }
        
        let userEmail = await User.findOne({ email });
        if(userEmail){
            return res.status(400).json({
                success: false,
                message: "There is already a user with that email"
            })
        }

        //<---- Encriptar contraseña ---->
        const salt = bcrypt.genSaltSync(10);
        const encryptPassword = await bcrypt.hash(password, salt);
        //<------------------------------>

        const newUser = {
            name,
            email,
            password: encryptPassword
        }

        await User.create(newUser);

        let user = await User.findOne({email});
        const token = await generateJWT(user.id, user.name)

        return res.status(201).json({
            success: true,
            message: 'Create user successfully',
	    name,
	    password,
            token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error?.message || error
        })
        
    }
}


authController.login = async(req, res) =>{

    try {

        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User or password are incorrect"
            })
        }
        
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({
                success: false,
                message: "Password incorrect"
            })
        }

        const token = await generateJWT(user.id, user.name)
        return res.status(202).json({
            success: true,
            message: 'Loggin user successfully',
            token: token,
            id: user.id,
            name: user.name
        })

    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "User can't login",
            error: error?.message || error
        })
    }
};

authController.renew = async(req, res) =>{

    const id = req.user_id
    const name = req.user_name

    try {
        const token = await generateJWT(id, name)
        
        return res.status(200).json({
            success: true,
            message: 'Refresh token successfully',
            token
        })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Error trying to renew token",
            error: error?.message || error
        })
    }
}


module.exports = authController
