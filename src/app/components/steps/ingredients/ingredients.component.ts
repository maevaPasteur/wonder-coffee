import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    category: any;

    @Input() inputData: any;
    @Output() sendBackData = new EventEmitter();

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getIngredients().subscribe(data => {
                this.category = data;
                console.log(this.category);
            }
        );
    }

}
