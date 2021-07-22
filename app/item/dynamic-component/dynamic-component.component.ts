import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators'

import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DynamicComponentDirective } from './shared/dynamic-component.directive';
import { DynamicComponentService } from './shared/dynamic-component.service';
import { ThridComponentComponent } from './thrid-component/thrid-component.component';

export enum ComponentList {
  FirstComponnent,
  SecondComponent,
  ThirdComponent
}


@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  private destroy$ = new Subject();
  @ViewChild(DynamicComponentDirective, { static: true} as any) container: DynamicComponentDirective;
  constructor(
    private dynamicComponentService: DynamicComponentService,
    // private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadComponentByBussinesStrategy(null);
    this.watchComponentChange();
  }

  watchComponentChange() {
    this.dynamicComponentService.componentChange$
      .pipe(
        takeUntil(this.destroy$),
        tap(data => this.loadComponentByBussinesStrategy(data))
      )
      .subscribe();
  }

  loadComponentByBussinesStrategy(renderComponent: any) {

    switch (renderComponent) {
      case ComponentList.FirstComponnent:
        this.renderFirstComponent();
        break;
      case ComponentList.SecondComponent:
        this.renderSecondComponent();
        break;
      case ComponentList.ThirdComponent:
        this.renderThirdComponent();
        break;
      default:
        this.renderThirdComponent();
        break;
    }

    
  }

  private renderFirstComponent(){
    const data = {
      texto: 'texto 1'
    };

    this.dynamicComponentService.loadComponent(this.container, FirstComponentComponent, data);
  }

  private renderSecondComponent(){
    const data = {
      texto: 'texto 2'
    };

    this.dynamicComponentService.loadComponent(this.container, SecondComponentComponent, data);
  }

  private renderThirdComponent() {
    const data = {
      texto: 'texto 3'
    };

    this.dynamicComponentService.loadComponent(this.container, ThridComponentComponent, data);
  }
}
