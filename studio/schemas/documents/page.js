import {format} from 'date-fns'

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title'
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the post',
        options: {
          source: 'title',
          maxLength: 96
        }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
    ]
}