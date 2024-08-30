const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/db');
const router = express.Router();


// LOGIN USER
router.post('/login', (req, res) => {
    const { name, email, password } = req.body;
})