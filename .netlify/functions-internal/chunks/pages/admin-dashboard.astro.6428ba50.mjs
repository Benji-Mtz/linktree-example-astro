/* empty css                                     */import { a as createAstro, b as createComponent, r as renderTemplate, d as renderHead } from '../astro.bb669e4f.mjs';
/* empty css                                     */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro();
const $$AdminDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminDashboard;
  return renderTemplate`<html lang="en">
  <head>
    <title>Content Manager</title>
    <meta name="description" content="Admin dashboard for managing website content">
    
    
  ${renderHead()}</head>
  <body></body></html>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-netlify-cms/admin-dashboard.astro", void 0);

const $$file = "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-netlify-cms/admin-dashboard.astro";
const $$url = undefined;

export { $$AdminDashboard as default, $$file as file, $$url as url };
