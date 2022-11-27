// This metadata is added to Metalsmith's global metadata.
// The file could be default-metadata.json instead. This one is in JavaScript
// in order to allow comments.
const buildDate = new Date();
const metadata = {
    buildDate: buildDate.toISOString(),
    buildYear: buildDate.getFullYear(),
    layout: 'layout', // Sets a default page layout - layouts/layout-before.html and layouts/layout-after.html
    liveReload: !!process.env.LIVE_RELOAD
};

module.exports = metadata;

/* In addition to the above metadata, @fidian/metalsmith-site will add or use the following additional properties.
 *
 * layout: If defined, Markdown files will have the layout wrapped around the content. Mustache runs after the layouts.
 *
 * link: A function to help create links between page objects. Pass it a reference to a page. This function's added by metalsmith-relative-links - see https://github.com/tests-always-included/metalsmith-relative-links for additional usage information.
 *
 * ancestry: Structure to navigate to different pages, find children, link to a parent, and iterate over siblings. See https://www.npmjs.com/package/metalsmith-ancestry for info.
 */
