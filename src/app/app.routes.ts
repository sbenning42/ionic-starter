import { RouteLinks, RouteLinkPageId } from "../models/route-link";
import { FirstUsePage } from "../pages/first-use/first-use";
import { WelcomePage } from "../pages/welcome/welcome";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from "../pages/home/home";
import { SettingsPage } from "../pages/settings/settings";

export const routes: RouteLinks = [
    {
        id: RouteLinkPageId.firstUse,
        page: FirstUsePage
    },
    {
        id: RouteLinkPageId.welcome,
        page: WelcomePage
    },
    {
        id: RouteLinkPageId.signin,
        page: SigninPage
    },
    {
        id: RouteLinkPageId.signup,
        page: SignupPage
    },
    {
        id: RouteLinkPageId.tabs,
        page: TabsPage
    },
    {
        id: RouteLinkPageId.home,
        page: HomePage,
        menu: {
            show: true,
            idx: 0,
            name: 'HOME',
            icon: 'home'
        },
        tabs: {
            show: true,
            idx: 0,
            name: 'HOME',
            icon: 'home'
        }
    },
    {
        id: RouteLinkPageId.settings,
        page: SettingsPage,
        menu: {
            show: true,
            idx: 1,
            name: 'SETTINGS',
            icon: 'informations-circle'
        },
        tabs: {
            show: true,
            idx: 1,
            name: 'SETTINGS',
            icon: 'informations-circle'
        }
    },
];
