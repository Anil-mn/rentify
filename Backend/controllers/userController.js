import User from '../modules/users.js'

export const createUser = async (req,res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser)
    }catch (error) {
        res.status(400).json({message:"error in adding user"})
    }
}

export const getUser = async (req,res)=>{
     await User.findById(req.params.id)
     .then(result=>{
        res.status(200).json(result)
     }).catch(error=>{
        res.status(400).json({message:"error loading user"})
     })
}

export const updateUser = async (req, res) => {
    new Promise((resolve, reject) => {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
            .then(updatedUser => {
                resolve(res.status(200).json(updatedUser));
            })
            .catch(error => {
                reject(res.status(400).json({ message: error.message }));
            });
    });
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};