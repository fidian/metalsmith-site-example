// This file can be pure JSON instead. This one is in JavaScript in order to
// have comments. When this file exists, Atomizer will be ran on the contents in
// order to generate CSS from Atomic CSS - see https://acss.io/
module.exports = {
    // This is where the generated Atomic CSS is created in Metalsmith. Other
    // plugins can manipulate this file before Metalsmith writes everying to
    // its configured destination folder, which is under build/ by default.
    destination: "css/atomic.css",

    acssConfig: {
        // This sample site is responsive. Screen size defaults to desktop.
        // The events links use one of the breakpoints and the print media to
        // control layout and if links should be displayed.
        breakPoints: {
            l: "@media screen and (max-width: 992px)", // Large - landscape tablet
            m: "@media screen and (max-width: 768px)", // Medium - portrait tablet, landscape phone
            s: "@media screen and (max-width: 575px)", // Small - portrait phone
            p: "@media print" // Print version
        },

        // I've found that naming the colors after how they are used allows for
        // the greatest flexibility when making themes. You would use the colors
        // by setting class attributes, like this:
        //     <div class="Bgc(pageBorderBg)">
        custom: {
            pageBorderBg: "#7fff7f",
            pageContentBg: "#ffffff",
            blueGlow:
                "-2px 0 2px blue, 0 -2px 2px blue, 2px 0 2px blue, 0 2px 2px blue"
        }
    },

    // Adding custom rules into Atomizer. Rules match the class names and will
    // generate CSS.
    addRules: [
        // These involve allowing/disallowing page breaks when pages are
        // printed.
        {
            type: "pattern",
            name: "Ba",
            matcher: "Ba",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "break-after": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid",
                    alw: "always",
                    all: "all",
                    ap: "avoid-page",
                    p: "page",
                    start: "left",
                    end: "right",
                    ro: "recto",
                    vo: "verso",
                    ac: "avoid-column",
                    c: "column",
                    ar: "avoid-region",
                    r: "region"
                }
            ]
        },
        {
            type: "pattern",
            name: "Bb",
            matcher: "Bb",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "break-before": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid",
                    alw: "always",
                    all: "all",
                    ap: "avoid-page",
                    p: "page",
                    start: "left",
                    end: "right",
                    ro: "recto",
                    vo: "verso",
                    ac: "avoid-column",
                    c: "column",
                    ar: "avoid-region",
                    r: "region"
                }
            ]
        },
        {
            type: "pattern",
            name: "Bi",
            matcher: "Bi",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "break-inside": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid",
                    ap: "avoid-page",
                    ac: "avoid-column",
                    ar: "avoid-region"
                }
            ]
        },
        {
            type: "pattern",
            name: "Pba",
            matcher: "Pba",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "page-break-after": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid",
                    al: "always",
                    left: "left",
                    right: "right"
                }
            ]
        },
        {
            type: "pattern",
            name: "Pbb",
            matcher: "Pbb",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "page-break-before": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid",
                    al: "always",
                    left: "left",
                    right: "right"
                }
            ]
        },
        {
            type: "pattern",
            name: "Pbi",
            matcher: "Pbi",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "page-break-inside": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    av: "avoid"
                }
            ]
        },

        // Column-related rules
        {
            type: "pattern",
            name: "Cc",
            matcher: "Cc",
            allowParamToValue: true,
            styles: {
                "column-count": "$0"
            }
        },
        {
            type: "pattern",
            name: "Cf",
            matcher: "Cf",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "column-fill": "$0"
            },
            arguments: [
                {
                    a: "auto",
                    b: "balance"
                }
            ]
        },
        {
            type: "pattern",
            name: "Cg",
            matcher: "Cg",
            styles: {
                "column-gap": "$0"
            }
        },
        {
            type: "pattern",
            id: "Crc",
            name: "Crc",
            matcher: "Crc",
            noParams: false,
            styles: {
                "column-rule-color": "$0"
            }
        },
        {
            type: "pattern",
            name: "Crs",
            matcher: "Crs",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "column-rule-style": "$0"
            },
            arguments: [
                {
                    d: "dotted",
                    da: "dashed",
                    do: "double",
                    g: "groove",
                    h: "hidden",
                    i: "inset",
                    n: "none",
                    o: "outset",
                    r: "ridge",
                    s: "solid"
                }
            ]
        },
        {
            type: "pattern",
            name: "Crw",
            matcher: "Crw",
            styles: {
                "column-rule-width": "$0"
            }
        },
        {
            type: "pattern",
            name: "Cs",
            matcher: "Cs",
            allowParamToValue: false,
            shorthand: true,
            styles: {
                "column-span": "$0"
            },
            arguments: [
                {
                    a: "all",
                    n: "none"
                }
            ]
        },
        {
            type: "pattern",
            name: "Cw",
            matcher: "Cw",
            styles: {
                "column-width": "$0"
            }
        }
    ]
};
