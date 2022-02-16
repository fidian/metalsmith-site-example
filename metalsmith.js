const metalsmithSite = require("@fidian/metalsmith-site");
const os = require("os");
let lastFiles = null; // For PDF generation

metalsmithSite.run(
    {
        baseDirectory: __dirname,
        serve: process.env.SERVE || process.env.PDF,
        buildBefore: (sugar) => {
            // Translate Unicode by leveraging a custom Metalsmith plugin.
            sugar.use(__dirname + "/plugins/translate-unicode");
        },
        metadataAfter: (sugar) => {
            // Change the rootPath for the 404 page because it could be loaded at
            // any path. The live server may not show this file, but hosting sites
            // (such as GitHub Pages) typically can be set up to serve this file as
            // the 404 error handler page.
            sugar.use((files, metalsmith, done) => {
                files["404.md"].rootPath = "/";
                done();
            });
        },
        contentsBefore: (sugar) => {
            // Extract the first chunk of text of events and add it to the file's
            // metadata as "summary". This is another custom Metalsmith plugin.
            sugar.use(__dirname + "/plugins/extract-summary");
        },
        buildAfter: (sugar) => {
            // If we are not live serving these files, let's minify them.
            if (!process.env.SERVE) {
                // Make the JavaScript work in a much wider variety of browsers
                sugar.use("metalsmith-babel", {
                    presets: ["@babel/preset-env"]
                });

                // Minify the JavaScript
                sugar.use("metalsmith-uglify", {
                    sameName: true,
                    uglify: {
                        sourceMap: false
                    }
                });

                // Minify the CSS
                sugar.use("@fidian/metalsmith-clean-css", {
                    files: "**/*.css"
                });

                // Minify the HTML
                sugar.use("metalsmith-html-minifier");
            }
        },
        postProcess: (done) => {
            // Turn the index page into a PDF
            if (process.env.PDF) {
                generatePdf((e) => {
                    if (e) {
                        throw e;
                    }

                    if (!process.env.SERVE && process.env.PDF) {
                        // The server was started in order to generate the PDF.
                        // Kill the server - we are done with the build.
                        process.exit(0);
                    }

                    done(e);
                });
            } else {
                done();
            }
        }
    },
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

const wkhtmltopdf = require("wkhtmltopdf");

function generatePdf(done) {
    console.log(`Creating index.pdf`);
    const stream = wkhtmltopdf("http://localhost:8080/", {
        // debug: true,
        // debugStdOut: true,
        printMediaType: true,
        enableForms: true,
        marginTop: "1in",
        marginBottom: ".55in",
        marginLeft: ".25in",
        marginRight: ".25in",
        output: "build/index.pdf"
    });
    stream.on("error", (e) => {
        done(e);
    });
    stream.on("end", () => {
        done();
    });
}
