import {Component, OnInit} from '@angular/core';
import {DropletService} from "../services/droplet/droplet.service";

@Component({
    selector: 'app-droplet',
    templateUrl: './droplet.component.html',
    styleUrls: ['./droplet.component.css'],
    providers: [DropletService]
})
export class DropletComponent implements OnInit {
    constructor(private dropletService: DropletService) {
    }

    ngOnInit() {
        console.log('droplet component started');
        this.dropletService.fetchCpuUsage().subscribe(console.log)
    }

}
