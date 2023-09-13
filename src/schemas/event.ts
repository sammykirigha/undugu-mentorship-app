import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location (Venue)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'facebook_link',
      title: 'Facebook Link',
      type: 'string',
    }),
    defineField({
      name: 'twitter_link',
      title: 'Twitter Link',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required()
    }),
  ],
  initialValue: () => ({
    createdAt: (new Date()).toISOString()
  }),
});
