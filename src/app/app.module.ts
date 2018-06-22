import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from './home/home.component';
import {DropletComponent} from './droplet/droplet.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeHeaderComponent } from './home-header/home-header.component';
import { CommandsComponent } from './commands/commands.component';
import {RouterModule, Routes} from "@angular/router";
import { CommandDisplayComponent } from './command-display/command-display.component';
import {MatCardModule} from "@angular/material";

const appRoutes: Routes = [
    {path: 'commands', component: CommandsComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DropletComponent,
        HomeHeaderComponent,
        CommandsComponent,
        CommandDisplayComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes, {enableTracing: true}
        ),
        BrowserModule,
        MatCardModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
