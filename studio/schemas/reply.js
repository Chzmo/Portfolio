export default {
    name: 'reply',
    title: 'Reply',
    type: 'document',
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'string'
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'arry',
            of:[{type:'like'}]
        },
        {
            name: 'replyingTo',
            title: 'Replying To',
            type: 'string'
        },
        {
            name: 'userImage',
            title: 'User Image',
            type: 'string'
        },
        {
            name: 'userName',
            title: 'User Image',
            type: 'string'
        },
    ],
}