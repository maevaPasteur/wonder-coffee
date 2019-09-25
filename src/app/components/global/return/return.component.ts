import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
    selector: 'app-return',
    templateUrl: './return.component.html',
    styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
    }

}
