
import { ViewChild, ViewContainerRef, Component, TemplateRef} from '@angular/core';
import { ComponentList } from '../dynamic-component/dynamic-component.component';
import { DynamicComponentService } from '../dynamic-component/shared/dynamic-component.service';

export enum SwitchValues {
  case1,
  case2,
  case3
}

@Component({
  selector: "reports",
  moduleId: module.id,
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})

export class ReportsComponent {
  buttonList = [
    {
      id: 1,
      name: 'Report A',
      template: 'reportA',
      case: SwitchValues.case1,
    },
    {
      id: 2,
      name: 'Report B',
      template: 'reportB',
      case: SwitchValues.case2,
    },
    {
      id: 3,
      name: 'Report C',
      template: 'reportC',
      case: SwitchValues.case3,
    },
    // {
    //   id: 4,
    //   name: 'Report D',
    //   template: 'reportD'
    // },
  ];

  contentA = `<label  text = "content A"></label>`;
  contentB = `<label  text = "content B"></label>`;
  contentC = `<label  text = "content C"></label>`;

  @ViewChild("reportTemplate", {read: ViewContainerRef, static: false}) vc: ViewContainerRef;
  @ViewChild("case1", {static: false}) case1: TemplateRef<any>;
  @ViewChild("case2", {static: false}) case2: TemplateRef<any>;
  @ViewChild("case3", {static: false}) case3: TemplateRef<any>;

  // data = {
  //   renderComponent: ComponentList.SecondComponent,
  // }

  // switch: SwitchValues;
  // case1 = SwitchValues.case1;
  // case2 = SwitchValues.case1;
  // case3 = SwitchValues.case1;

  constructor(
    private service: DynamicComponentService,
  ) {
    // this.switch = SwitchValues.case1;
  }

  ngAfterViewInit(): void{
    // const view = this.case1.createEmbeddedView(null);
    // // // console.log(view);
    // this.vc.insert(view);
  }

  onReportSelect(itemId: number) {
    this.vc.clear();
    const find = this.buttonList.find( x => x.id === itemId);
    switch (find.case) {
      case SwitchValues.case1:
        this.vc.createEmbeddedView(this.case1);
        this.service.changeComponent(ComponentList.FirstComponnent);
        break;
      case SwitchValues.case2:
        this.vc.createEmbeddedView(this.case2);
        this.service.changeComponent(ComponentList.SecondComponent);
        break;
      case SwitchValues.case3:
        this.vc.createEmbeddedView(this.case3);
        this.service.changeComponent(ComponentList.ThirdComponent);
        break;
    }
    // this.switch == find.case;
  }

}