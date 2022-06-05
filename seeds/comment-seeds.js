const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'I love to code',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I love to read action books',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'I love watching movies on my off time',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Korean food yum',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'That sounds good',
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;