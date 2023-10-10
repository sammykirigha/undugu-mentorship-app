import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'userOccupation',
      title: 'User Occupation',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'userAvatar',
      title: 'User Avatar',
      type: 'image'
    }),
  ]
});
