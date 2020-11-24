export interface DefaultArgOptions {
  skipPrompts: boolean;
}

export enum GeneralTemplates {
  Static = "HTML + CSS static",
  React = "React only project",
  Node = "Node.js only project",
  Fullstack = "React + Node Fullstack project",
}

export enum UIKits {
  Material = "Material Design",
  SemanticUI = "Semantic UI",
  AntDesign = "Ant Design",
  Bootstrap = "Bootstrap",
  Orbis = "Orbis",
}

export enum StateManagement {
  Context = "Context",
  Hooks = "Hooks",
  Redux = "Redux",
  Mobx = "Mobx",
}

export interface ReactConfig {
  typescript?: boolean;
  eslint?: boolean;
  git?: boolean;
  axios?: boolean;
  styled_components?: boolean;
  nextjs?: boolean;
  storybook?: boolean;
  tests?: boolean;
  uikit?: UIKits;
  state_management?: StateManagement;
}

export const reactWizardChoices = [
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

export interface NodeConfig {
  typescript?: boolean;
  tests?: boolean;
  auth_middleware?: boolean;
  axios?: boolean;
  git?: boolean;
}

export const nodeWizardChoices = [
  { name: "💙 Typescript", checked: true, value: "typescript" },
  { name: "📝 Tests", checked: true, value: "tests" },
  { name: "🔒 Add Auth Middleware & Controller", value: "auth_middleware" },
  { name: "✨ Add Axios Service Wrapper", value: "axios" },
  { name: "📦 Git Repo", value: "git" },
];

export interface StaticConfig {}

export interface WizardConfig {
  defaultConfig?: DefaultArgOptions;
  reactConfig?: ReactConfig;
  nodeConfig?: NodeConfig;
  staticConfig?: StaticConfig;
  isConfirmed: boolean;
}
