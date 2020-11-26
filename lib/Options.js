"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticWizardChoices = exports.nodeWizardChoices = exports.RenderMethods = exports.reactWizardChoices = exports.StateManagement = exports.UIKits = exports.GeneralTemplates = exports.WizardStatus = void 0;
var WizardStatus;
(function (WizardStatus) {
    WizardStatus[WizardStatus["INIT"] = 0] = "INIT";
    WizardStatus[WizardStatus["STARTED"] = 1] = "STARTED";
    WizardStatus[WizardStatus["ABORTED"] = 2] = "ABORTED";
    WizardStatus[WizardStatus["COMPLETED"] = 3] = "COMPLETED";
})(WizardStatus = exports.WizardStatus || (exports.WizardStatus = {}));
// ==== REACTJS ====
var GeneralTemplates;
(function (GeneralTemplates) {
    GeneralTemplates["Static"] = "HTML + CSS static";
    GeneralTemplates["React"] = "React only project";
    GeneralTemplates["Node"] = "Node.js only project";
    GeneralTemplates["Fullstack"] = "React + Node Fullstack project";
})(GeneralTemplates = exports.GeneralTemplates || (exports.GeneralTemplates = {}));
var UIKits;
(function (UIKits) {
    UIKits["Material"] = "Material Design";
    UIKits["SemanticUI"] = "Semantic UI";
    UIKits["AntDesign"] = "Ant Design";
    UIKits["Bootstrap"] = "Bootstrap";
    UIKits["Orbis"] = "Orbis";
})(UIKits = exports.UIKits || (exports.UIKits = {}));
var StateManagement;
(function (StateManagement) {
    StateManagement["Context"] = "Context";
    StateManagement["Hooks"] = "Hooks";
    StateManagement["Redux"] = "Redux";
    StateManagement["Mobx"] = "Mobx";
})(StateManagement = exports.StateManagement || (exports.StateManagement = {}));
exports.reactWizardChoices = [
    { title: "⚡Typescript", selected: true, value: "typescript" },
    { title: "⚡Next JS", selected: true, value: "nextjs" },
    { title: "⚡Global State", value: "state_management" },
    { title: "✨Styled Components", selected: true, value: "styled_components" },
    { title: "✨Custom UI Kit", selected: true, value: "uikit" },
    { title: "⚙️Storybook", selected: true, value: "storybook" },
    { title: "⚙️Unit Tests", selected: true, value: "tests" },
    { title: "⚙️Eslint", value: "eslint" },
    { title: "⚙️Axios", value: "axios" },
    { title: "⚙️Git Repo", value: "git" },
];
// ===== NODEJS ======
var RenderMethods;
(function (RenderMethods) {
    RenderMethods["React"] = "Add React Build In Public folder";
    RenderMethods["Static"] = "Static HTML render in public folder";
})(RenderMethods = exports.RenderMethods || (exports.RenderMethods = {}));
exports.nodeWizardChoices = [
    { title: "⚡Typescript", selected: true, value: "typescript" },
    {
        title: "⚡Auth",
        description: "Add Middleware & Controller to handle Auth (token based)",
        value: "auth_middleware",
    },
    {
        title: "⚡Client Render",
        description: "Node.js responsible for rendering '*' route",
        value: "render_method",
    },
    { title: "⚙️Tests", selected: true, value: "tests" },
    { title: "⚙️Axios Service Wrapper", value: "axios" },
    { title: "⚙️Git Repo", value: "git" },
];
exports.staticWizardChoices = [
    { title: "SASS", selected: true, value: "sass" },
    { title: "JS", value: "javascript" },
    { title: "Git Repo", value: "git" },
];
