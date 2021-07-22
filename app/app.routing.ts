import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ReportsComponent } from "./item/reports/reports.component";

const routes: Routes = [
    { path: "", redirectTo: "/reports", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "reports", component: ReportsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }