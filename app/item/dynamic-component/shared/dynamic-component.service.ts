import { ComponentFactoryResolver, Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class DynamicComponentService {

    private componentChange = new BehaviorSubject(null);
    componentChange$ = this.componentChange.asObservable();
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    loadComponent(container: any, component: any, data?:  any) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const viewContainerRef = container.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as any).data = data;
    }

    changeComponent(value: any) {
        this.componentChange.next(value);
    }
}