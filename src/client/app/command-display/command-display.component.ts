import {Component, OnInit} from '@angular/core';

interface CommandDescription {
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-command-display',
    templateUrl: './command-display.component.html',
    styleUrls: ['./command-display.component.css']
})
export class CommandDisplayComponent implements OnInit {
    public activeCommand: number = 0;
    public infos: CommandDescription[] = [
        {
            title: 'Keep track of users',
            description: 'Keep up with how many times your moderators have warned users.',
            image: 'https://cdn.hifumi.io/website/assets/history.png'
        },
        {
            title: 'Lots of testing',
            description: 'Make sure you are like doing things my dude',
            image: 'https://cdn.hifumi.io/website/assets/strike.png'
        }
    ];

    constructor() {}

    ngOnInit() { }

    public get image(){
        return this.infos[this.activeCommand].image;
    }

    public onHover(index: number){

        this.activeCommand = index;
    }

    public isActive(index: number){
        if (index === this.activeCommand){
            return
        }
        return 'text-hidden'
    }
}
