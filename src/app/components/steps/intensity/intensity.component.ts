import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
    selector: 'app-intensity',
    templateUrl: './intensity.component.html',
    styleUrls: ['./intensity.component.sass']
})
export class IntensityComponent implements OnInit {

    intensity: any;

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
        // this.data.getProducts().subscribe(data => {
        //         this.product = data[0].category.find(c => c.name === this.inputData.product_category).products;
        //         console.log(this.product);
        //     }
        // );
        this.data.getIntensity().subscribe(data => {
                this.intensity = data;
                console.log(this.intensity);
            }
        );
    }

}
