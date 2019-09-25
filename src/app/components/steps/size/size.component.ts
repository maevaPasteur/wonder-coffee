import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

    sizes: any;

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getSizes().subscribe(data => {
                this.sizes = data;
                console.log(this.sizes);
            }
        );
    }

}
