// ===== Command Line =====
export interface DefaultArgOptions {
  skipPrompts: boolean;
}

// ==== REACTJS ====
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
  { name: "⚡Typescript", checked: true, value: "typescript" },
  { name: "⚡Next JS", checked: true, value: "nextjs" },
  { name: "⚡Global State", value: "state_management" },
  { name: "✨Styled Components", checked: true, value: "styled_components" },
  { name: "✨Custom UI Kit", checked: true, value: "uikit" },
  { name: "⚙️Storybook", checked: true, value: "storybook" },
  { name: "⚙️Unit Tests", checked: true, value: "tests" },
  { name: "⚙️Eslint", value: "eslint" },
  { name: "⚙️Axios", value: "axios" },
  { name: "⚙️Git Repo", value: "git" },
];

// ===== NODEJS ======

export enum RenderMethods {
  React = "Add React Build In Public folder",
  Static = "Static HTML render in public folder",
}

export interface NodeConfig {
  typescript?: boolean;
  tests?: boolean;
  auth_middleware?: boolean;
  axios?: boolean;
  git?: boolean;
  render_method?: RenderMethods;
}

export const nodeWizardChoices = [
  { name: "⚡Typescript", checked: true, value: "typescript" },
  { name: "⚡Add Auth Middleware & Controller", value: "auth_middleware" },
  { name: "⚡Render '*' Route Handler", value: "render_method" },
  { name: "⚙️Tests", checked: true, value: "tests" },
  { name: "⚙️Add Axios Service Wrapper", value: "axios" },
  { name: "⚙️Git Repo", value: "git" },
];

// ==== STATIC =====
export interface StaticConfig {
  sass?: boolean;
  javascript?: boolean;
  git?: boolean;
}

export const staticWizardChoices = [
  { name: "SASS", checked: true, value: "sass" },
  { name: "JS", value: "javascript" },
  { name: "Git Repo", value: "git" },
];
export interface WizardConfig {
  defaultConfig?: DefaultArgOptions;
  reactConfig?: ReactConfig;
  nodeConfig?: NodeConfig;
  staticConfig?: StaticConfig;
  isConfirmed: boolean;
}
