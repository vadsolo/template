export enum WizardStatus {
  INIT,
  STARTED,
  ABORTED,
  COMPLETED,
}

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

export enum RenderMethods {
  React = "Serving Built React App from Public folder",
  Static = "Service Static HTML from public folder",
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

// ==== STATIC =====
export interface StaticConfig {
  sass?: boolean;
  javascript?: boolean;
  git?: boolean;
}

export const staticWizardChoices = [
  { title: "SASS", selected: true, value: "sass" },
  { title: "JS", value: "javascript" },
  { title: "Git Repo", value: "git" },
];
export interface WizardConfig {
  defaultConfig?: DefaultArgOptions;
  reactConfig?: ReactConfig;
  nodeConfig?: NodeConfig;
  staticConfig?: StaticConfig;
  status: WizardStatus;
}
