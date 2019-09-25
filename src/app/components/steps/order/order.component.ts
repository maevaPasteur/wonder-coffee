import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

}
