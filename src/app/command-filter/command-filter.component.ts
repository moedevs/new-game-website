import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatCheckbox} from '@angular/material';

@Component({
    selector: 'app-command-filter',
    templateUrl: './command-filter.component.html',
    styleUrls: ['./command-filter.component.css']
})
export class CommandFilterComponent implements OnInit {
    @Input() readonly name: string;
    @Input() readonly color: string;
    public enabled = true;
    constructor() {
    }

    ngOnInit() {
    }


}
