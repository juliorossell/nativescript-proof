import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ReportsComponent } from "./item/reports/reports.component";
import { TakeScreenshotComponent } from "./item/take-screenshot/take-screenshot.component";

const routes: Routes = [
    { path: "", redirectTo: "/screen", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "reports", component: ReportsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "screen", component: TakeScreenshotComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }