import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class AppRoutingCache implements RouteReuseStrategy {
  private storedRoutes = new Map<String, DetachedRouteHandle>;

  // 判斷路由是否能重複使用
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path !== "notfound";
  }

  // 當路由離開時，會觸發此方法
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    if (route.routeConfig?.path) {
      this.storedRoutes.set(route.routeConfig?.path, handle);
    }
  }

  // 當路由進入時，可判斷是否還原路由的暫存內容
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig?.path) {
      return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig?.path);
    }
    else {
      return false;
    }
  }
  // 從 Cache 中取得對應的暫存內容
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (route.routeConfig?.path && this.storedRoutes.has(route.routeConfig?.path)) {
      return this.storedRoutes.get(route.routeConfig?.path)!;
    }
    else {
      return null!;
    }

  }

  // 判斷是否同一路由
  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
