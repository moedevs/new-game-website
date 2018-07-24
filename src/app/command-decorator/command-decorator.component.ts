import {Component, Input, OnInit} from '@angular/core';
import {UserPermissions} from '../commands/commands.component';

@Component({
    selector: 'app-command-decorator',
    templateUrl: './command-decorator.component.html',
    styleUrls: ['./command-decorator.component.css']
})
export class CommandDecoratorComponent implements OnInit {
    @Input() type: UserPermissions;

    readonly uPermissions = UserPermissions;

    constructor() {
    }

    ngOnInit() {
    }

    describeCommand() {
        switch (this.type) {
            case UserPermissions.Admin:
                return 'Admin Command';
            case UserPermissions.Moderator:
                return 'Mod Command';
            case UserPermissions.Everyone:
                return '';
        }
    }
    getTooltip() {
        switch (this.type) {
            case UserPermissions.Admin:
                return 'Requires the Administrator permission';
            case UserPermissions.Moderator:
                return 'Requires the Ban Members permission';
        }
    }
}
