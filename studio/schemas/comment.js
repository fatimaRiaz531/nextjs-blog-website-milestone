// /studio/schemas/comment.js
export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'comment',
        type: 'text',
        title: 'Comment',
      },
      {
        name: 'approved',
        type: 'boolean',
        title: 'Approved',
        description: "Comments won't show on the site without approval",
        initialValue: false,
      },
      {
        name: 'post',
        type: 'reference',
        to: [{ type: 'post' }],
      },
    ],
  };