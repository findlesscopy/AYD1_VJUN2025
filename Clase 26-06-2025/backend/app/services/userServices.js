

const getAllUsers = async () => {
    const pool = require('../database/database');
    const query = 'SELECT * FROM usuarios';
    const [rows] = await pool.query(query);
    return rows;
}

const getUserById = async (id) => {
    const pool = require('../database/database');
    const query = 'SELECT * FROM usuarios WHERE id_usuario = ?';
    const [rows] = await pool.query(query, [id]);
    return rows[0];
}

const createUser = async (user) => {
    const pool = require('../database/database');
    const query = 'INSERT INTO usuarios (nombre, apellido, genero, email, pass, direccion, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const { nombre, apellido, genero, email, pass, direccion, fecha_nacimiento } = user;
    const [result] = await pool.query(query, [nombre, apellido, genero, email, pass, direccion, fecha_nacimiento]);
    return { id: result.insertId, ...user };
}

const updateUser = async (id, user) => {
    const pool = require('../database/database');
    const query = 'UPDATE usuarios SET nombre = ?, apellido = ?, genero = ?, email = ?, pass = ?, direccion = ?, fecha_nacimiento = ? WHERE id_usuario = ?';
    const { nombre, apellido, genero, email, pass, direccion, fecha_nacimiento } = user;
    user.id_usuario = id; // Ensure the user object has the id_usuario field
    await pool.query(query, [nombre, apellido, genero, email, pass, direccion, fecha_nacimiento, id]);
    return { id, ...user };
}   

const deleteUser = async (id) => {
    const pool = require('../database/database');
    const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
    await pool.query(query, [id]);
    return { message: 'User deleted successfully' };
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};