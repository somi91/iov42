import { Directive, OnDestroy } from "@angular/core";
import { Observable, Subject, Subscription, takeUntil } from "rxjs";


declare module "rxjs" {
  interface Observable<T> {
    unsubscribeOnDestroy(this: Observable<T>, component: BaseComponent): Observable<T>;
  }
}
Observable.prototype.unsubscribeOnDestroy = function <T>(this: Observable<T>, component: BaseComponent): Observable<T> {
  return this.pipe(takeUntil(component.ngUnsubscribe));
};

@Directive()
export class BaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  ngUnsubscribe = new Subject<void>();
  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }
}