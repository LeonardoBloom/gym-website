const express = require('express');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const db = require('../db/db');
const router = express.Router();


// REGISTER NEW USER
router.post('/users/register', (req, res) => {
    const { first_name, last_name, date_of_birth, membership_plan_id } = req.body;

    // const hashedPassword = bcrypt.hashSync(password, 10);
    let membership_duration = 30
    switch(membership_plan_id) {
        case 1: 
            membership_duration = 30;
            break;
        case 2: 
            membership_duration = 30;
            break;
        case 3: 
            membership_duration = 30;
            break;
        case 4: 
            membership_duration = 90;
            break;
        case 5: 
            membership_duration = 180;
            break;
        case 6: 
            membership_duration = 365;
            break;
    }

    const sql = `INSERT INTO members (first_name, last_name, date_of_birth, membership_plan_id, join_date, membership_end_date ) VALUES (?, ?, ?, ?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL ${membership_duration} DAY))`;
    db.query(sql, [first_name, last_name, date_of_birth, membership_plan_id], (err, result) => {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.status(201).json({message: 'New User Registered SUCCESSFULLY'})
        console.log('new user created')
    });
});

router.get('/users/:member_id', (req, res) => {
    const { member_id } = req.params;

    const sql = `SELECT * FROM members WHERE member_id = ?`
    db.query(sql, [member_id], (err, result) => {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.json(result);
        console.log(`recovered user with id ${member_id}`)
    });
});

router.get('/users', (req, res) => {
    const { member_id } = req.params;

    const sql = `SELECT * FROM members`
    db.query(sql, [member_id], (err, result) => {
        if(err) {
            return res.status(500).json({error: err.message});
        }
        res.json(result);
        console.log(`recovered all users`)
    });
});

module.exports = router
