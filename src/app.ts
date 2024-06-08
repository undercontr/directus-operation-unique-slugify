import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'operation-unique-slugify',
	name: 'Slugify',
	icon: 'box',
	description: 'Unique slugifier',
	overview: ({ valueField, slugField, separator }) => [
		{
			label: 'Field to be used for slugging',
			text: valueField,
		},
		{
			label: 'Field that slug should be assigned',
			text: slugField,
		},
		{
			label: "Define a character to be used space replacement",
			text: separator
		}
	],
	options: [
		{
			field: 'valueField',
			name: 'Field to be used for slugging',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'slugField',
			name: 'Field that slug should be assigned',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'separator',
			name: 'Define a character to be used space replacement',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
	]
});
