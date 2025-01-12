import {defineField} from 'sanity'

const metadataFields = [
  defineField({
    type: 'string',
    name: 'downloadUrl',
    title: 'Download Url',
  }),
  defineField({
    type: 'string',
    name: 'url',
    title: 'Url',
  }),
  defineField({
    type: 'string',
    name: 'inlineSvg',
    title: 'Inline Svg',
  }),
  defineField({
    type: 'string',
    name: 'collectionId',
    title: 'Collection Id',
  }),
  defineField({
    type: 'string',
    name: 'collectionName',
    title: 'Collection Name',
  }),
  defineField({
    type: 'string',
    name: 'iconName',
    title: 'Icon Name',
  }),
  defineField({
    type: 'boolean',
    name: 'palette',
    title: 'Palette',
  }),
  defineField({
    type: 'object',
    name: 'license',
    title: 'License Info',
    fields: [
      defineField({
        type: 'string',
        name: 'name',
        title: 'License Name',
      }),
      defineField({
        type: 'string',
        name: 'url',
        title: 'License Url',
      }),
    ],
  }),
  defineField({
    type: 'object',
    name: 'author',
    title: 'Author Info',
    fields: [
      defineField({
        type: 'string',
        name: 'name',
        title: 'Author Name',
      }),
      defineField({
        type: 'string',
        name: 'url',
        title: 'Author Url',
      }),
    ],
  }),
  defineField({
    type: 'object',
    name: 'size',
    title: 'Custom Size',
    fields: [
      defineField({
        type: 'number',
        name: 'width',
        title: 'Width',
        validation: (Rule) => Rule.min(0),
      }),
      defineField({
        type: 'number',
        name: 'height',
        title: 'Height',
        validation: (Rule) => Rule.min(0),
      }),
    ],
  }),
  defineField({
    type: 'boolean',
    name: 'hFlip',
    title: 'H Flip',
  }),
  defineField({
    type: 'boolean',
    name: 'vFlip',
    title: 'V Flip',
  }),
  defineField({
    type: 'number',
    name: 'rotate',
    title: 'Rotate',
  }),
  defineField({
    type: 'object',
    name: 'color',
    title: 'Color',
    fields: [
      defineField({
        type: 'string',
        name: 'hex',
        title: 'Hex Color',
      }),
      defineField({
        type: 'object',
        name: 'rgba',
        title: 'RGBA Color',
        fields: [
          defineField({
            type: 'number',
            name: 'r',
            title: 'Red',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'g',
            title: 'Green',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'b',
            title: 'Blue',
            validation: (Rule) => Rule.min(0).max(255),
          }),
          defineField({
            type: 'number',
            name: 'a',
            title: 'Alpha',
            validation: (Rule) => Rule.min(0).max(1),
          }),
        ],
      }),
    ],
  }),
]

export default metadataFields
