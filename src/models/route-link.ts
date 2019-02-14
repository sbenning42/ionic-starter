export enum RouteLinkPageId {
    firstUse = '[Route Link Page Id] First Use',
    welcome = '[Route Link Page Id] Welcome',
    signin = '[Route Link Page Id] Signin',
    signup = '[Route Link Page Id] Signup',
    tabs = '[Route Link Page Id] Tabs',
    home = '[Route Link Page Id] Home',
    settings = '[Route Link Page Id] Settings',
}

export interface RouteContext {
    show: boolean;
    idx: number;
    name: string;
    icon: string;
}

export interface RouteLink {
    id: string;
    page: any;
    menu?: RouteContext;
    tabs?: RouteContext;
}

export type RouteLinks = Array<RouteLink>;
