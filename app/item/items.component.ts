import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ModalComponent } from "~/item/modal/modal.component";
import { Router } from "@angular/router";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
  styleUrls: ['./items.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  showAccount = false;
  iconText: string;
  text: string;
  isLoaddingListPayment = false;
  constructor(private itemService: ItemService,
              private router: Router,
              private modalService: ModalDialogService,
              private vcRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.onTap();
  }

  onTap() {
    this.showAccount = !this.showAccount;
    if (this.showAccount) {
      this.iconText = 'abc ';
      this.text = ' Mostrar Saldo';
    } else {
      this.iconText = 'ywz ';
      this.text = ' Ocultar Saldo';
    }
  }

  openModal(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: {},
      fullscreen: true
    };

    this.modalService.showModal(ModalComponent, options);

  }

  onCallToAction() {
    this.isLoaddingListPayment = !this.isLoaddingListPayment;
  }

  goToDynamicTemplates() {
    this.router.navigate(['/reports']);
  }
}