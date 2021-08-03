import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalComponent } from "~/item/modal/modal.component";
import { ProofButtonComponent } from "./item/proof-button/proof-button.component";
import { NewsComponent } from "./item/news/news.component";
import { ReportsComponent } from "./item/reports/reports.component";
import { DynamicComponentModule } from "./item/dynamic-component/dynamic-component.module";
import { TakeScreenshotComponent } from "./item/take-screenshot/take-screenshot.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        DynamicComponentModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        ModalComponent,
        NewsComponent,
        ProofButtonComponent,
        ReportsComponent,
        TakeScreenshotComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalComponent],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
