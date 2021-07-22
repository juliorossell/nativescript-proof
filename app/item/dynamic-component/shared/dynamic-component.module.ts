import { NgModule } from "@angular/core";
import { DynamicComponentDirective } from "./dynamic-component.directive";
import { DynamicComponentService } from "./dynamic-component.service";



@NgModule({
    imports: [],
    declarations: [DynamicComponentDirective],
    exports: [DynamicComponentDirective],
    providers: [DynamicComponentService],
})

export class RenderDynamicComponentModule {}