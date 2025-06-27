const userService = require('../services/userServices');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        //console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
       // console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    try {
        const newUser = await userService.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        //console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const updatedUser = await userService.updateUser(id, user);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        //console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.deleteUser(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        //console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};  