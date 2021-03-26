
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements DoCheck {
    @Input() product: Product = {
        id: '',
        image: '',
        title: '',
        price: 0,
        description: ''
    };

    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1. constructor');
    }

    /*ngOnChanges(changes: SimpleChanges): void {
        console.log('2.- ngOnChanges');
        console.log(changes);
    }*/

    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    ngDoCheck(): void {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    }

    addCart(){
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

    /*product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
    };*/
}