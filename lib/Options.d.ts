export declare enum WizardStatus {
    INIT = 0,
    STARTED = 1,
    ABORTED = 2,
    COMPLETED = 3
}
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
    title: string;
    selected: boolean;
    value: string;
} | {
    title: string;
    value: string;
    selected?: undefined;
})[];
export declare enum RenderMethods {
    React = "Serving Built React App from Public folder",
    Static = "Service Static HTML from public folder"
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
    title: string;
    selected: boolean;
    value: string;
    description?: undefined;
} | {
    title: string;
    description: string;
    value: string;
    selected?: undefined;
} | {
    title: string;
    value: string;
    selected?: undefined;
    description?: undefined;
})[];
export interface StaticConfig {
    sass?: boolean;
    javascript?: boolean;
    git?: boolean;
}
export declare const staticWizardChoices: ({
    title: string;
    selected: boolean;
    value: string;
} | {
    title: string;
    value: string;
    selected?: undefined;
})[];
export interface WizardConfig {
    defaultConfig?: DefaultArgOptions;
    reactConfig?: ReactConfig;
    nodeConfig?: NodeConfig;
    staticConfig?: StaticConfig;
    status: WizardStatus;
}
