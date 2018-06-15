import {Component, OnInit} from '@angular/core';
import {BotApiService, IHifumiAPIResponse} from "../bot-api.service";

@Component({
    selector: 'app-home-header',
    templateUrl: './home-header.component.html',
    styleUrls: ['./home-header.component.css'],
    providers: [BotApiService]
})
export class HomeHeaderComponent implements OnInit {
    public users: string | number;
    public guilds: string | number;

    constructor(public botApi: BotApiService) {
    }

    ngOnInit() {
        this.botApi.getStats().subscribe((data: IHifumiAPIResponse) => {
            this.guilds = data.stats.guilds ? data.stats.guilds : '?';
            this.users = data.stats.users ? data.stats.users : '?';
        })
    }

}
