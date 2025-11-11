const {v4:uuidv4} = require('uuid')
const User = require('../models/users.model')




// get All users
const getAllUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);

    }catch(error){
        res.status(500).send(error.message)
    }
    
}


// get a single user by id
const getUser = async (req,res) => {
    try{
        const user = await User.findOne({id : req.params.id});
        res.status(200).json(user);
    } catch(error){
        res.status(500).send(error.message);
    }
}


// create a single user
const createUser = async (req,res) =>{
    try{
    const newUser = new User({
        id : uuidv4(),
        name : req.body.name,
        age : Number(req.body.age)
    });

    await newUser.save();
    res.status(201).json(newUser);

} catch(error){
    res.status(500).send(error.message);
}
}


// update a user
const updateUser = async (req,res)=>{
    try{
        const user = await User.findOne({id : req.params.id});
        user.name = req.body.name;
        user.age =  Number(req.body.age);

    await user.save();
    res.status(200).json(user);

} catch(error){
    res.status(500).send(error.message);
}
}


// delete a user
const deleteUser = async (req,res) => {
    try{
        await User.deleteOne({id : req.params.id});
        res.status(200).json({
            message : "User is Deleted"
        });
    } catch(error){
        res.status(500).send(error.message);
    }
}


module.exports = {getAllUsers,getUser,createUser,updateUser,deleteUser}