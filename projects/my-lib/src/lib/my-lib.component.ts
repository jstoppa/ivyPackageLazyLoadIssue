import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      this is a lazy loaded component in my-lib library!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
