"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairIllustration = void 0;
var react_1 = require("react");
var ChairIllustration = function (_a) {
    var _b, _c, _d;
    var type = _a.type, _e = _a.className, className = _e === void 0 ? "w-24 h-24" : _e, interactiveState = _a.interactiveState;
    // Extract or default interactive states
    var foldedArms = (_b = interactiveState === null || interactiveState === void 0 ? void 0 : interactiveState.foldedArms) !== null && _b !== void 0 ? _b : false;
    var extendedFootrest = (_c = interactiveState === null || interactiveState === void 0 ? void 0 : interactiveState.extendedFootrest) !== null && _c !== void 0 ? _c : false;
    var reclined = (_d = interactiveState === null || interactiveState === void 0 ? void 0 : interactiveState.reclined) !== null && _d !== void 0 ? _d : false;
    // Render specific SVG shapes depending on the chair model
    switch (type) {
        case 'mesh_simple':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#475569", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M50 105 L25 112 M50 105 L75 112 M50 105 L35 115 M50 105 L65 115", stroke: "#334155", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "25", cy: "112", r: "3", fill: "#1e293b" }),
                react_1.default.createElement("circle", { cx: "75", cy: "112", r: "3", fill: "#1e293b" }),
                react_1.default.createElement("circle", { cx: "35", cy: "115", r: "3", fill: "#1e293b" }),
                react_1.default.createElement("circle", { cx: "65", cy: "115", r: "3", fill: "#1e293b" }),
                react_1.default.createElement("rect", { x: "42", y: "86", width: "16", height: "4", rx: "1", fill: "#475569" }),
                react_1.default.createElement("path", { d: "M26 65 L26 78 L35 78", stroke: "#1e293b", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M74 65 L74 78 L65 78", stroke: "#1e293b", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("rect", { x: "30", y: "25", width: "40", height: "50", rx: "6", stroke: "#1e293b", strokeWidth: "4", fill: "#334155", fillOpacity: "0.1" }),
                react_1.default.createElement("path", { d: "M30 55 C 38 52, 62 52, 70 55", stroke: "#475569", strokeWidth: "2", strokeDasharray: "2 2" }),
                react_1.default.createElement("path", { d: "M30 63 C 38 60, 62 60, 70 63", stroke: "#475569", strokeWidth: "3" }),
                react_1.default.createElement("path", { d: "M38 25 V 75 M44 25 V 75 M50 25 V 75 M56 25 V 75 M62 25 V 75", stroke: "#94a3b8", strokeWidth: "1", strokeOpacity: "0.6" }),
                react_1.default.createElement("rect", { x: "28", y: "75", width: "44", height: "12", rx: "3", fill: "#1e293b" }),
                react_1.default.createElement("rect", { x: "30", y: "77", width: "40", height: "4", rx: "1", fill: "#475569" })));
        case 'mesh_white':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#cbd5e1", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M50 105 L25 112 M50 105 L75 112 M50 105 L35 115 M50 105 L65 115", stroke: "#e2e8f0", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "25", cy: "112", r: "3", fill: "#64748b" }),
                react_1.default.createElement("circle", { cx: "75", cy: "112", r: "3", fill: "#64748b" }),
                react_1.default.createElement("circle", { cx: "35", cy: "115", r: "3", fill: "#64748b" }),
                react_1.default.createElement("circle", { cx: "65", cy: "115", r: "3", fill: "#64748b" }),
                react_1.default.createElement("rect", { x: "42", y: "86", width: "16", height: "4", rx: "1", fill: "#cbd5e1" }),
                react_1.default.createElement("path", { d: "M26 65 L26 78 L35 78", stroke: "#cbd5e1", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
                react_1.default.createElement("path", { d: "M74 65 L74 78 L65 78", stroke: "#cbd5e1", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
                react_1.default.createElement("rect", { x: "30", y: "25", width: "40", height: "50", rx: "6", stroke: "#cbd5e1", strokeWidth: "4", fill: "#f1f5f9", fillOpacity: "0.6" }),
                react_1.default.createElement("path", { d: "M30 60 C 38 57, 62 57, 70 60", stroke: "#94a3b8", strokeWidth: "3" }),
                react_1.default.createElement("path", { d: "M38 25 V 75 M44 25 V 75 M50 25 V 75 M56 25 V 75 M62 25 V 75", stroke: "#cbd5e1", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "28", y: "75", width: "44", height: "12", rx: "3", fill: "#e2e8f0", stroke: "#cbd5e1", strokeWidth: "1.5" }),
                react_1.default.createElement("rect", { x: "30", y: "77", width: "40", height: "4", rx: "1", fill: "#f1f5f9" })));
        case 'fabric_grey':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#64748b", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M50 105 L25 112 M50 105 L75 112 M50 105 L35 115 M50 105 L65 115", stroke: "#475569", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "25", cy: "112", r: "3", fill: "#1e293b" }),
                react_1.default.createElement("circle", { cx: "75", cy: "112", r: "3", fill: "#1e293b" }),
                foldedArms ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("path", { d: "M25 73 L25 55", stroke: "#94a3b8", strokeWidth: "4.5", strokeLinecap: "round" }),
                    react_1.default.createElement("path", { d: "M75 73 L75 55", stroke: "#94a3b8", strokeWidth: "4.5", strokeLinecap: "round" }),
                    react_1.default.createElement("circle", { cx: "25", cy: "73", r: "2.5", fill: "#475569" }),
                    react_1.default.createElement("circle", { cx: "75", cy: "73", r: "2.5", fill: "#475569" }))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("path", { d: "M25 73 L25 62 L34 62", stroke: "#94a3b8", strokeWidth: "4.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                    react_1.default.createElement("path", { d: "M75 73 L75 62 L66 62", stroke: "#94a3b8", strokeWidth: "4.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                    react_1.default.createElement("circle", { cx: "25", cy: "73", r: "2.5", fill: "#475569" }),
                    react_1.default.createElement("circle", { cx: "75", cy: "73", r: "2.5", fill: "#475569" }))),
                react_1.default.createElement("rect", { x: "28", y: "24", width: "44", height: "48", rx: "10", fill: "#cbd5e1", stroke: "#94a3b8", strokeWidth: "2" }),
                react_1.default.createElement("path", { d: "M50 24 V 72", stroke: "#94a3b8", strokeWidth: "1", strokeDasharray: "3 3" }),
                react_1.default.createElement("path", { d: "M33 48 C 40 45, 60 45, 67 48", stroke: "#94a3b8", strokeWidth: "1.5" }),
                react_1.default.createElement("rect", { x: "24", y: "72", width: "52", height: "15", rx: "5", fill: "#64748b", stroke: "#475569", strokeWidth: "1.5" }),
                react_1.default.createElement("rect", { x: "24", y: "72", width: "52", height: "6", rx: "2", fill: "#94a3b8" })));
        case 'mesh_anatomic':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 106 L50 90", stroke: "#334155", strokeWidth: "4" }),
                react_1.default.createElement("path", { d: "M50 106 L22 113 M50 106 L78 113 M50 106 L34 116 M50 106 L66 116", stroke: "#1e293b", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "22", cy: "113", r: "3.5", fill: "#0f172a" }),
                react_1.default.createElement("circle", { cx: "78", cy: "113", r: "3.5", fill: "#0f172a" }),
                react_1.default.createElement("path", { d: "M44 24 L44 14 M56 24 L56 14", stroke: "#64748b", strokeWidth: "2" }),
                react_1.default.createElement("rect", { x: "36", y: "6", width: "28", height: "9", rx: "4.5", fill: "#334155", stroke: "#1e293b", strokeWidth: "1.5" }),
                react_1.default.createElement("path", { d: "M38 10 H 62", stroke: "#475569", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "38", y: "58", width: "24", height: "9", rx: "4", fill: "#020617", opacity: "0.8" }),
                react_1.default.createElement("circle", { cx: "50", cy: "62.5", r: "2", fill: "#64748b" }),
                react_1.default.createElement("path", { d: "M25 64 L25 76 L33 76", stroke: "#334155", strokeWidth: "3.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M75 64 L75 76 L67 76", stroke: "#334155", strokeWidth: "3.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("rect", { x: "28", y: "24", width: "44", height: "48", rx: "8", stroke: "#1e293b", strokeWidth: "3", fill: "#475569", fillOpacity: "0.1" }),
                react_1.default.createElement("path", { d: "M34 24 V 72 M42 24 V 72 M50 24 V 72 M58 24 V 72 M66 24 V 72", stroke: "#475569", strokeWidth: "0.8", strokeOpacity: "0.5" }),
                react_1.default.createElement("path", { d: "M28 42 H 72", stroke: "#475569", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                react_1.default.createElement("rect", { x: "25", y: "72", width: "50", height: "12", rx: "3.5", fill: "#1e293b" }),
                react_1.default.createElement("rect", { x: "25", y: "72", width: "50", height: "5", rx: "1.5", fill: "#475569" })));
        case 'recliner_footrest':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#94a3b8", strokeWidth: "4.5" }),
                react_1.default.createElement("path", { d: "M50 105 L22 113 M50 105 L78 113 M50 105 L34 116 M50 105 L66 116", stroke: "#cbd5e1", strokeWidth: "4.5", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "22", cy: "113", r: "3.5", fill: "#475569" }),
                react_1.default.createElement("circle", { cx: "78", cy: "113", r: "3.5", fill: "#475569" }),
                extendedFootrest ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("line", { x1: "40", y1: "83", x2: "40", y2: "100", stroke: "#cbd5e1", strokeWidth: "3" }),
                    react_1.default.createElement("line", { x1: "60", y1: "83", x2: "60", y2: "100", stroke: "#cbd5e1", strokeWidth: "3" }),
                    react_1.default.createElement("rect", { x: "32", y: "100", width: "36", height: "8", rx: "2", fill: "#1e293b", stroke: "#334155", strokeWidth: "1" }))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("rect", { x: "38", y: "83", width: "24", height: "4", rx: "1", fill: "#475569" }),
                    react_1.default.createElement("line", { x1: "42", y1: "83", x2: "42", y2: "86", stroke: "#94a3b8", strokeWidth: "2" }),
                    react_1.default.createElement("line", { x1: "58", y1: "83", x2: "58", y2: "86", stroke: "#94a3b8", strokeWidth: "2" }))),
                react_1.default.createElement("path", { d: "M26 62 L22 75 L33 77", stroke: "#1e293b", strokeWidth: "3.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M74 62 L78 75 L67 77", stroke: "#1e293b", strokeWidth: "3.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M46 22 L46 14 M54 22 L54 14", stroke: "#475569", strokeWidth: "2.5" }),
                react_1.default.createElement("rect", { x: "34", y: "5", width: "32", height: "10", rx: "5", fill: "#1e293b" }),
                react_1.default.createElement("rect", { x: "28", y: "22", width: "44", height: "52", rx: "8", stroke: "#1e293b", strokeWidth: "3", fill: "#334155", fillOpacity: "0.1" }),
                react_1.default.createElement("path", { d: "M28 50 C 35 46, 65 46, 72 50", stroke: "#1e293b", strokeWidth: "2" }),
                react_1.default.createElement("path", { d: "M38 22 V 74 M50 22 V 74 M62 22 V 74", stroke: "#475569", strokeWidth: "1", strokeOpacity: "0.4" }),
                react_1.default.createElement("rect", { x: "25", y: "74", width: "50", height: "11", rx: "3.5", fill: "#1e293b", stroke: "#334155", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "25", y: "74", width: "50", height: "4", rx: "1.5", fill: "#475569" })));
        case 'gamer_white':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#475569", strokeWidth: "4" }),
                react_1.default.createElement("path", { d: "M50 105 L23 112 M50 105 L77 112 M50 105 L35 116 M50 105 L65 116", stroke: "#1e293b", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "23", cy: "112", r: "3.5", fill: "#0f172a" }),
                react_1.default.createElement("circle", { cx: "77", cy: "112", r: "3.5", fill: "#0f172a" }),
                react_1.default.createElement("path", { d: "M23 60 L23 75 L32 75", stroke: "#cbd5e1", strokeWidth: "4.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M77 60 L77 75 L68 75", stroke: "#cbd5e1", strokeWidth: "4.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M21 59 L25 59", stroke: "#1e293b", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M79 59 L75 59", stroke: "#1e293b", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M26 25 L20 40 L26 65 L30 73 H 70 L74 65 L80 40 L74 25 Z", fill: "#1e293b", stroke: "#cbd5e1", strokeWidth: "3", strokeLinejoin: "round" }),
                react_1.default.createElement("rect", { x: "40", y: "24", width: "7", height: "6", rx: "1.5", fill: "#cbd5e1" }),
                react_1.default.createElement("rect", { x: "53", y: "24", width: "7", height: "6", rx: "1.5", fill: "#cbd5e1" }),
                react_1.default.createElement("path", { d: "M30 35 L33 65 M70 35 L67 65", stroke: "#cbd5e1", strokeWidth: "1.5" }),
                react_1.default.createElement("rect", { x: "42", y: "14", width: "16", height: "8", rx: "3", fill: "#0f172a", stroke: "#cbd5e1", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "35", y: "58", width: "30", height: "10", rx: "3.5", fill: "#0f172a", stroke: "#cbd5e1", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "24", y: "73", width: "52", height: "13", rx: "4", fill: "#1e293b", stroke: "#cbd5e1", strokeWidth: "1.5" }),
                react_1.default.createElement("path", { d: "M24 73 L21 78 L26 86", stroke: "#cbd5e1", strokeWidth: "2.5", strokeLinecap: "round" }),
                react_1.default.createElement("path", { d: "M76 73 L79 78 L74 86", stroke: "#cbd5e1", strokeWidth: "2.5", strokeLinecap: "round" })));
        case 'mesh_headrest':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 90", stroke: "#94a3b8", strokeWidth: "4" }),
                react_1.default.createElement("path", { d: "M50 105 L24 112 M50 105 L76 112 M50 105 L35 115 M50 105 L65 115", stroke: "#cbd5e1", strokeWidth: "4", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "24", cy: "112", r: "3", fill: "#475569" }),
                react_1.default.createElement("circle", { cx: "76", cy: "112", r: "3", fill: "#475569" }),
                react_1.default.createElement("rect", { x: "38", y: "10", width: "24", height: "12", rx: "5", fill: "#64748b", stroke: "#475569", strokeWidth: "1.5" }),
                react_1.default.createElement("path", { d: "M48 22 L48 25 M52 22 L52 25", stroke: "#475569", strokeWidth: "2" }),
                react_1.default.createElement("path", { d: "M26 65 L26 77 L35 77", stroke: "#64748b", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M74 65 L74 77 L65 77", stroke: "#64748b", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("rect", { x: "30", y: "25", width: "40", height: "48", rx: "6", stroke: "#64748b", strokeWidth: "3", fill: "#e2e8f0", fillOpacity: "0.4" }),
                react_1.default.createElement("path", { d: "M30 55 C 38 52, 62 52, 70 55", stroke: "#475569", strokeWidth: "2.5" }),
                react_1.default.createElement("path", { d: "M38 25 V 73 M44 25 V 73 M50 25 V 73 M56 25 V 73 M62 25 V 73", stroke: "#cbd5e1", strokeWidth: "1" }),
                react_1.default.createElement("rect", { x: "27", y: "73", width: "46", height: "12", rx: "3", fill: "#475569" }),
                react_1.default.createElement("rect", { x: "29", y: "75", width: "42", height: "4", rx: "1", fill: "#64748b" })));
        case 'pu_pink':
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M50 105 L50 88", stroke: "#94a3b8", strokeWidth: "4.5" }),
                react_1.default.createElement("path", { d: "M50 105 L23 112 M50 105 L77 112 M50 105 L35 116 M50 105 L65 116", stroke: "#cbd5e1", strokeWidth: "4.5", strokeLinecap: "round" }),
                react_1.default.createElement("circle", { cx: "23", cy: "112", r: "3.5", fill: "#475569" }),
                react_1.default.createElement("circle", { cx: "77", cy: "112", r: "3.5", fill: "#475569" }),
                react_1.default.createElement("path", { d: "M24 64 L24 76 L33 76", stroke: "#fda4af", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M24 64 L24 76 L33 76", stroke: "#e2e8f0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M76 64 L76 76 L67 76", stroke: "#fda4af", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("path", { d: "M76 64 L76 76 L67 76", stroke: "#e2e8f0", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
                react_1.default.createElement("rect", { x: "26", y: "18", width: "48", height: "54", rx: "12", fill: "#fecdd3", stroke: "#fda4af", strokeWidth: "3" }),
                react_1.default.createElement("path", { d: "M26 36 C 35 34, 65 34, 74 36", stroke: "#f43f5e", strokeWidth: "1.5", strokeOpacity: "0.4" }),
                react_1.default.createElement("path", { d: "M26 54 C 35 52, 65 52, 74 54", stroke: "#f43f5e", strokeWidth: "1.5", strokeOpacity: "0.4" }),
                react_1.default.createElement("rect", { x: "32", y: "24", width: "36", height: "42", rx: "8", fill: "#ffe4e6", opacity: "0.6" }),
                react_1.default.createElement("rect", { x: "23", y: "71", width: "54", height: "15", rx: "5", fill: "#fecdd3", stroke: "#fda4af", strokeWidth: "2" }),
                react_1.default.createElement("rect", { x: "23", y: "71", width: "54", height: "6", rx: "2", fill: "#ffe4e6" }),
                react_1.default.createElement("path", { d: "M35 77 H 65", stroke: "#f43f5e", strokeWidth: "1", strokeOpacity: "0.3" })));
        default:
            return (react_1.default.createElement("svg", { viewBox: "0 0 100 120", className: className, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("circle", { cx: "50", cy: "50", r: "30", fill: "#94a3b8" })));
    }
};
exports.ChairIllustration = ChairIllustration;
