import { defineOperationApi } from "@directus/extensions-sdk";
import slugify from "slugify";

type Options = {
  valueField: string;
  slugField: string;
  prefixField: string;
  separator: string;
};

type Data = Record<string, any>;

export default defineOperationApi<Options>({
  id: "operation-unique-slugify",
  handler: async (
    { valueField, slugField, prefixField, separator },
    { services, data: dataRaw, getSchema }
  ) => {
    const data = dataRaw as Data;

    const isDelete = data.$trigger.event.split(".").slice(-1)[0] === "delete";
    const title = data.$trigger.payload[valueField];

    if (isDelete || !title) return data.$trigger.payload;

    const schema = await getSchema();

    const collection = data.$trigger.event.split(".")[0];

    const itemsService = new services.ItemsService(collection, {
      schema,
      accountability: data.accountability,
    });

    const prefixedSlug = prefixField ? prefixField.replace(/^\/|\/$/g, '') + '/' + title : title;

    const baseSlug = slugify(prefixedSlug, {
      lower: true,
      replacement: separator,
      remove: /[*+~.()'"!:@]/g,
    });

    let uniqueSlug = baseSlug;

    const existingSlugs = await itemsService.readByQuery({
      filter: {
        [slugField]: { _starts_with: baseSlug },
      },
      fields: [slugField, 'date_updated', 'date_created'],
      sort: ['-date_updated', '-date_created'],
      limit: 1
    });

    if (existingSlugs.length > 0) {
      const latestSlug = existingSlugs[0][slugField];
      const match = latestSlug.match(/-(\d+)$/);
      if (match) {
        const suffix = parseInt(match[1], 10) + 1;
        uniqueSlug = `${baseSlug}-${suffix}`;
      } else {
        uniqueSlug = `${baseSlug}-1`;
      }
    }

    return { ...data.$trigger.payload, [slugField]: uniqueSlug };
  },
});
