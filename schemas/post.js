export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'user',
        },
      ],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Email',
              name: 'email',
              type: 'string',
            },
            {
              title: 'Password',
              name: 'password',
              type: 'string',
            },
            {
              title: 'Content',
              name: 'content',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'description',
      subtitle: 'author.name',
    },
  },
  prepare(selection) {
    const {title, subtitle} = selection
    return {
      title,
      subtitle,
    }
  },
}
