import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: "modal",
  moduleId: module.id,
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],

})

export class ModalComponent {

  constructor(private params: ModalDialogParams) {
  }

}