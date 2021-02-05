const pluginKit = require("metalsmith-plugin-kit");

module.exports = function translateUnicode() {
    return pluginKit.middleware({
        match: "**/*.md",
        each: function(filename, fileObject, files) {
            let contents = fileObject.contents
                .toString()
                .trim()
                .replace(/[ \t]*\n/g, "\n");
            fileObject.summary = contents.split("\n\n")[0];
        }
    });
};
