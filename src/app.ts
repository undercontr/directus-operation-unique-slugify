import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'operation-unique-slugify',
	name: 'Unique Slugify',
	icon: 'box',
	description: 'Slugify your fields ensuring uniqueness',
	overview: ({ valueField, slugField, prefixField, separator }) => [
		{
			label: 'Field to be used for slugging',
			text: valueField,
		},
		{
			label: 'Field that slug should be assigned',
			text: slugField,
		},
		{
			label: 'Slug prefix',
			text: prefixField,
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
			field: 'prefixField',
			name: 'Slug prefix',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
				note: 'Enter a prefix that is used in front of the title slug. Preceding and succeeding slashes are removed.',
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
