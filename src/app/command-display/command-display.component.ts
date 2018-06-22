import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-command-display',
    templateUrl: './command-display.component.html',
    styleUrls: ['./command-display.component.css']
})

export class CommandDisplayComponent implements OnInit {
    @Input() public image_src: string;
    @Input() public description: string;

    constructor() {}
    ngOnInit() { }

}
