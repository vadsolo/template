"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeWizardChoices = exports.reactWizardChoices = exports.StateManagement = exports.UIKits = exports.GeneralTemplates = void 0;
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
    { name: "💙 Typescript", checked: true, value: "typescript" },
    { name: "🍀 Next JS", checked: true, value: "nextjs" },
    { name: "⚡ Global State", value: "state_management" },
    { name: "💄 Styled Components", checked: true, value: "styled_components" },
    { name: "🎨 Custom UI Kit", checked: true, value: "uikit" },
    { name: "📚 Storybook", checked: true, value: "storybook" },
    { name: "📝 Unit Tests", checked: true, value: "tests" },
    { name: "✨ Eslint", value: "eslint" },
    { name: "✨ Axios", value: "axios" },
    { name: "📦 Git Repo", value: "git" },
];
exports.nodeWizardChoices = [
    { name: "💙 Typescript", checked: true, value: "typescript" },
    { name: "📝 Tests", checked: true, value: "tests" },
    { name: "🔒 Add Auth Middleware & Controller", value: "auth_middleware" },
    { name: "✨ Add Axios Service Wrapper", value: "axios" },
    { name: "📦 Git Repo", value: "git" },
];
