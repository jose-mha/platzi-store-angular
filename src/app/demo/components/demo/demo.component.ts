import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  items = ['jose', 'julian', 'pedro'];

  objeto = {};

  power = 10;

  addItem() {
    this.items.push( 'Nuevo item' );
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
