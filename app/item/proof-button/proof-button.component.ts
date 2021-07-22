import { Component, OnInit } from '@angular/core';

import { registerElement } from '@nativescript/angular';
import { ContentView } from '@nativescript/core';

@Component({
  selector: 'ns-proof-button, [ns-proof-button]',
  moduleId: module.id,
  templateUrl: './proof-button.component.html',
  styleUrls: ['./proof-button.component.css']
})
export class ProofButtonComponent implements OnInit {
  onTapEmitter;
  constructor() { }

  ngOnInit() {
  }

}

registerElement('ns-proof-button', () => ContentView);

