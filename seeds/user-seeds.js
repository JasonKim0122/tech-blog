const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'Joey01',
        email: 'Joey@gmail.com',
        password: 'pass123'
    },
    {
        username: 'Kimbo123',
        email: 'Kim@gmail.com',
        password: 'pass123'
    },
    {
        username: 'AlexHudder22',
        email: 'Alex@gmail.com',
        password: 'pass123'
    },
    {
        username: 'KanyeWhest231',
        email: 'Kanye@gmail.com',
        password: 'pass123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;