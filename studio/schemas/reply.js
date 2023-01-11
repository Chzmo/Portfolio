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
            type: 'array',
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
            type: 'url'
        },
        {
            name: 'userName',
            title: 'User Name',
            type: 'string'
        },
    ],
}