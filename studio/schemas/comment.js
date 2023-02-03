export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'Posted By',
            type: 'array',
            of:[{type: 'user'}]
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'string'
        },
        {
            name: 'replies',
            title: 'Replies',
            type: 'array',
            of:[{type: 'reply'}]
        },
        {
            name: 'likedBy',
            title: 'Liked By',
            type: 'array',
            of:[{type: 'like'}]
        },
    ]
}