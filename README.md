# Directus Operation Extension: Unique Slugify

This Directus operation extension ensures that the `slug` (another field can be selected) field of a collection is unique by generating a slug based on the `title` (another field can be selected) field and add an optional slug prefix. If the generated slug already exists, it appends a numeric suffix to make it unique.

## Features

- Generates a slug from the title field with an optional prefix.
- Ensures the slug is unique by appending a numeric suffix.
- Uses `date_updated` and `date_created` to determine the most recent slug for uniqueness.

## Installation

1. **Package Installation**:
   - Install the package using the choice of your package manager (please use the package manager that Directus uses in your Directus folder)
      - `npm i directus-operation-unique-slugify`
      - `pnpm install directus-operation-unique-slugify`
      - `yarn add directus-operation-unique-slugify`
   - For docker version of Directus please use below:
      - `pnpm install directus-operation-unique-slugify`

2. **Restart Directus**:
   - Restart your Directus instance to load the new operation extension.

## Configuration

1. **Navigate to Flows**:
   - Go to the Directus Admin interface and navigate to `Settings > Flows`.

2. **Create a New Flow**:
   - Click on `Create Flow`.
   - Add a trigger that fits your requirement, such as `Create` or `Update` event on your target collection.

3. **Add the Operation**:
   - Add a new operation to the flow.
   - Select `Unique Slugify` from the list of available operations.
   - Configure the options:
     - Field to be used for slugging
     - Field that slug should be assigned
     - Field that defines optional slug prefix
     - Define a character to be used space replacement

4. **Save and Activate**:
   - Save the flow and ensure it is activated.

## Example Configuration

If your base field name is `title`, your slug field is `slug`, and the space replacement separator you want to use is `-`, configure the options as follows:

- Field to be used for slugging: `title`
- Field that slug should be assigned: `slug`
- Define a character to be used space replacement: `-`
