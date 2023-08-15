import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            label: "Links",
            name: "links",
            slug: "{{linkTitle}}",
            folder: "src/pages/links",
            create: true,
            delete: true,
            fields: [
              {
                label: "Link Title",
                name: "linkTitle",
                widget: "string",
              },
              {
                label: "Link Description",
                name: "linkDescription",
                widget: "string",
              },
              {
                label: "Link URL",
                name: "linkURL",
                widget: "string",
              },
            ],
          },
        ],
      },
    }),
  ],
  output: "server",
  adapter: netlify()
});