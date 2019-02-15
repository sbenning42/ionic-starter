import { Injectable } from '@angular/core';
import { RouteLinks, RouteLink, RouteLinkPageId } from '../../models/route-link';
import { App, Tabs, MenuController } from 'ionic-angular';
import { Observable, BehaviorSubject } from 'rxjs';

/*
  Generated class for the NavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavProvider {

  static forRoot(routes: RouteLinks): typeof NavProvider {
    NavProvider.routes = routes;
    NavProvider.hasRoutes = true;
    return NavProvider;
  }

  static forTabs(tabs: Tabs): typeof NavProvider {
    NavProvider.tabs = tabs;
    return NavProvider;
  }

  static routes: RouteLinks;
  static hasRoutes: boolean = false;
  static tabs: Tabs;

  private _menuEnabled: boolean = true;
  get menuEnabled(): boolean {
    return this._menuEnabled;
  }
  set menuEnabled(menuEnabled: boolean) {
    this._menuEnabled = menuEnabled;
    this.menu.enable(menuEnabled);
  }

  private _routes$: BehaviorSubject<RouteLinks>;
  routes$: Observable<RouteLinks>;

  constructor(
    public app: App,
    public menu: MenuController
  ) {
    console.log('Hello NavProvider Provider');
    this._routes$ = new BehaviorSubject(NavProvider.routes || []);
    this.routes$ = this._routes$.asObservable();
  }

  getPage(id: string): any {
    return NavProvider.routes.find((route: RouteLink) => route.id === id).page;
  }

  getTabs(): RouteLinks {
    return NavProvider.routes.filter((route: RouteLink) => route.tabs && route.tabs.show);
  }

  getMenu(): RouteLinks {
    return NavProvider.routes.filter((route: RouteLink) => route.menu && route.menu.show);
  }

  setRoot(id: string) {
    this.menu.enable(id === RouteLinkPageId.tabs);
    this.app.getRootNav().setRoot(this.getPage(id));
  }

  select(id: string) {
    const route = NavProvider.routes.find((innerRoute: RouteLink) => innerRoute.id === id);
    if (!(NavProvider.tabs && route && route.tabs && (route.tabs.idx !== -1))) {
      return ;
    }
    NavProvider.tabs.select(route.tabs.idx);
  }

}
