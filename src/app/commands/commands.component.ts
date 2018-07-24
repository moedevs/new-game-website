import {Component, OnInit, ViewChild} from '@angular/core';
import {CommandFilterComponent} from '../command-filter/command-filter.component';


enum ClientPermissions {

}

type CommandCategory = 'Info' | 'Moderation' | 'Fun' | 'Utility';

interface Command {
    names: string[];
    userPermissions?: UserPermissions;
    clientPermissions?: ClientPermissions[];
    category: CommandCategory;
}

export interface Filter {
    name: string;
    class: string;
    enabled: boolean;
}

export enum UserPermissions {
    GuildOwner = 'guild-owner-command',
    Admin = 'admin-command',
    Moderator = 'mod-command',
    Everyone = 'everyone-command'
}

@Component({
    selector: 'app-commands',
    templateUrl: './commands.component.html',
    styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
    readonly uPermissions = UserPermissions;
    readonly commands: Command[] = [
        {names: ['help'], category: 'Info'},
        {names: ['history', 'h'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['whatanime'], category: 'Fun'},
        {names: ['nuke'], category: 'Utility'},
        {names: ['snipe'], category: 'Utility'},
        {names: ['ban'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['strike'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['note'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['kick'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['softban'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['mute'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['snipe'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['deletestrike'], category: 'Moderation', userPermissions: UserPermissions.Moderator},
        {names: ['ping'], category: 'Info'},
        {names: ['serverinfo'], category: 'Info'},
        {names: ['botinfo'], category: 'Info'},
        {names: ['whatsnew'], category: 'Info'},
        {names: ['source'], category: 'Info'},
        {names: ['stats'], category: 'Info'},
        {names: ['uptime'], category: 'Info'},
        {names: ['yousuck'], category: 'Info'},
        {names: ['invite'], category: 'Info'},
    ];
    readonly filters: Filter[] = [
        {name: 'Moderation', class: 'moderation-filter', enabled: true},
        {name: 'Info', class: 'info-filter', enabled: true},
        {name: 'Fun', class: 'fun-filter', enabled: true},
        {name: 'Utility', class: 'utility-filter', enabled: true},
    ];
    constructor() {

    }

    ngOnInit() {
    }

    getCategoryColor(category: CommandCategory): string {
        const filter = this.filters.find(filtered => filtered.name === category);
        if (!filter) {
            throw new Error(`Unknown category ${category}`);
        }
        return filter.class;
    }
     get filtered() {
        const activeFilters: string[] = this.filters.reduce((coll: string[], item: Filter) => {
            if (item.enabled) {
                coll.push(item.name);
            }
            return coll;
        }, <string[]> []);
        const filtered: Command[] = this.commands.filter(command => activeFilters.includes(command.category));
        return filtered.sort((a: Command, b: Command) => {
            if (a.names[0] < b.names[0]) {
                return -1;
            } else if (a.names[0] > b.names[0]) {
                return 1;
            }
            return 0;
        });
    }

    toggle(index: number) {
        this.filters[index].enabled = !this.filters[index].enabled;
    }
    getStyle(index: number) {
        const filter: Filter = this.filters[index];
        return filter.enabled ? filter.class : 'disabled-filter';
    }
}
