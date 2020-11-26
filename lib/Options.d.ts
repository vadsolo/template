export interface DefaultArgOptions {
    skipPrompts: boolean;
}
export declare enum GeneralTemplates {
    Static = "HTML + CSS static",
    React = "React only project",
    Node = "Node.js only project",
    Fullstack = "React + Node Fullstack project"
}
export declare enum UIKits {
    Material = "Material Design",
    SemanticUI = "Semantic UI",
    AntDesign = "Ant Design",
    Bootstrap = "Bootstrap",
    Orbis = "Orbis"
}
export declare enum StateManagement {
    Context = "Context",
    Hooks = "Hooks",
    Redux = "Redux",
    Mobx = "Mobx"
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
export declare const reactWizardChoices: ({
    name: string;
    checked: boolean;
    value: string;
} | {
    name: string;
    value: string;
    checked?: undefined;
})[];
export declare enum RenderMethods {
    React = "Add React Build In Public folder",
    Static = "Static HTML render in public folder"
}
export interface NodeConfig {
    typescript?: boolean;
    tests?: boolean;
    auth_middleware?: boolean;
    axios?: boolean;
    git?: boolean;
    render_method?: RenderMethods;
}
export declare const nodeWizardChoices: ({
    name: string;
    checked: boolean;
    value: string;
} | {
    name: string;
    value: string;
    checked?: undefined;
})[];
export interface StaticConfig {
    sass?: boolean;
    javascript?: boolean;
    git?: boolean;
}
export declare const staticWizardChoices: ({
    name: string;
    checked: boolean;
    value: string;
} | {
    name: string;
    value: string;
    checked?: undefined;
})[];
export interface WizardConfig {
    defaultConfig?: DefaultArgOptions;
    reactConfig?: ReactConfig;
    nodeConfig?: NodeConfig;
    staticConfig?: StaticConfig;
    isConfirmed: boolean;
}
