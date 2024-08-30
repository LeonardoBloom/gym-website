const express = require('express')
const mysql = require('mysql2');
// const cors = require('cors');

// const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin.routes');

const app = express();
app.use(express.json());
// app.use(cors());

app.use('/api/admin', adminRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/members', memberRoutes);
// app.use('/api/plans', plansRoutes);
// app.use('/api/classes', classesRoutes);
// app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => {
    res.send("Gym Server is up and running !");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
