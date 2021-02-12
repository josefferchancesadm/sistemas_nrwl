/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sistemas-acessos-front',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class AcessosFrontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
