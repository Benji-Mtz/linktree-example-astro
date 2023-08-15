/* empty css                                     */import { a as createAstro, b as createComponent, r as renderTemplate, e as renderSlot, d as renderHead, f as addAttribute, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, g as renderComponent, F as Fragment } from '../astro.bb669e4f.mjs';
/* empty css                           */import { optimize } from 'svgo';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <!-- Google tag (gtag.js) -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZHPM8Q9DCM"><\/script>\n    \n    <meta charset="utf-8">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', ">\n    <title>", "</title>\n  ", '</head>\n  <body>\n    <div class="flex flex-col items-center w-full">\n      <div class="flex flex-col items-center w-4/6 h-full my-20 lg:w-3/6 2xl:w-2/6 gap-y-14">\n        ', "\n      </div>\n    </div>\n  </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/layouts/MainLayout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Avatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Avatar;
  return renderTemplate`${maybeRenderHead()}<div class="text-center">
  <img class="mb-4 rounded h-36 lg:h-56" src="/benji.jpg" alt="Extra large avatar">
  <a href="https://www.twitter.com/@benji_pres_zac" class="text-xl text-white transition-all duration-500 lg:text-2xl hover:text-teal-200" target="_blank">@benji_pres_zac</a>
</div>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/components/Avatar.astro", void 0);

const $$Astro$7 = createAstro();
const $$LinksLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinksLayout;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-center w-full gap-y-6">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/layouts/LinksLayout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Link;
  const { linkTitle, linkDescription, linkURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center w-full gap-y-8">
  <div class="flex flex-col justify-center cursor-pointer w-full p-4 text-sm text-center text-white transition-all duration-500 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl lg:text-xl hover:bg-opacity-40 hover:scale-110">
    <a${addAttribute(linkURL, "href")} target="_blank"><button><span class="font-semibold">${linkTitle}${" "}</span>${linkDescription}</button>
    </a>
  </div>
</div>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/components/Link.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$5 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$4 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>
    ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}
</svg>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$3 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use>
</svg>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$1 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<p class="mb-3 text-justify text-gray-50 dark:text-gray-50 first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
  Soy una persona apasionada de la tecnología y el código. Me gusta resolver
  problemas como cualquier ingeniero por lo que sería agradable que me siguieras
  para poder compartir, código, ideas y claro una rica taza de cafe.
</p>

<h1 class="text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark:text-white">
  Redes sociales
</h1>

<div class="flex justify-between w-5/6 mt-1 text-teal-300">
  <a class="transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100" href="https://www.twitter.com/@Benji_Pres_zac" target="_blank">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 md:w-12 xl:w-14", "name": "mdi:twitter" })}
  </a>
  <a class="transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100" href="https://www.github.com/Benji-Mtz" target="_blank">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 md:w-12 xl:w-14", "name": "mdi:github" })}
  </a>
  <a class="transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100" href="https://www.linkedin.com/in/benji-martinez-flores-27215059/" target="_blank">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 md:w-12 xl:w-14", "name": "mdi:linkedin" })}
  </a>
  <a class="transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100" href="https://www.instagram.com/benjimtzfl/" target="_blank">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 md:w-12 xl:w-14", "name": "mdi:instagram" })}
  </a>
  <a class="transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100" href="https://www.youtube.com/@benjimtzfl" target="_blank">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "w-8 md:w-12 xl:w-14", "name": "mdi:youtube" })}
  </a>
</div>`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/components/Social.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const links = await Astro2.glob(/* #__PURE__ */ Object.assign({"./links/1-portafolio.md": () => import('./1-portafolio.md.6eb223de.mjs'),"./links/2-linktr.md": () => import('./2-linktr.md.4fafffcb.mjs'),"./links/3-linkedin.md": () => import('./3-linkedin.md.3ff56735.mjs')}), () => "./links/*.md");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Astro LinkTree Clone" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Avatar", $$Avatar, {})}
  ${renderComponent($$result2, "Social", $$Social, {})}
  
` })}
${renderComponent($$result, "LinksLayout", $$LinksLayout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<h1 class="text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-6xl dark:text-white">
    Links profesionales.
  </h1>
  ${links.map((link) => {
    return renderTemplate`${renderComponent($$result2, "Link", $$Link, { "linkTitle": link.frontmatter.linkTitle, "linkDescription": link.frontmatter.linkDescription, "linkURL": link.frontmatter.linkURL })}`;
  })}` })}`;
}, "/home/benji/Documentos/React/Astro/linktree-clone/src/pages/index.astro", void 0);

const $$file = "/home/benji/Documentos/React/Astro/linktree-clone/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
