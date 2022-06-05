const { Post } = require('../models');

const postData = [
    {
        title: 'Thoughts on coding?',
        user_id: 1
    },
    {
        title: 'Favorite book genre?',
        user_id: 2
    },
    {
        title: 'Favorite things to do on spare time?',
        user_id: 3
    },
    {
        title: 'Favorite type of food?',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;