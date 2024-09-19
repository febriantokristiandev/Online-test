const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Koneksi 
const sequelize = new Sequelize('user_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users'
});


sequelize.sync();


// API Key AUTH MIDDLEWARE
const API_KEY = 'APIKEY12345678';

function authenticateApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === API_KEY) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
    }
}

app.use(authenticateApiKey);


// POST: Tambah pengguna baru
app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({
            message: 'Pengguna berhasil ditambahkan',
            user: newUser
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'Email sudah digunakan' });
        } else {
            res.status(500).json({ error: 'Terjadi kesalahan' });
        }
    }
});

// GET: Ambil daftar seluruh pengguna
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan' });
    }
});

// GET: Ambil data pengguna berdasarkan ID
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan' });
    }
});

// DELETE: Hapus pengguna berdasarkan ID
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'Pengguna berhasil dihapus' });
        } else {
            res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
