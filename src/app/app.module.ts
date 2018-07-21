import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {DropletComponent} from './droplet/droplet.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { CommandsComponent } from './commands/commands.component';
import {RouterModule, Routes} from '@angular/router';
import { CommandDisplayComponent } from './command-display/command-display.component';
import {MatCardModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UploaderComponent} from './uploader/uploader.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'commands', component: CommandsComponent},
    {path: 'uploader', component: UploaderComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DropletComponent,
        HomeHeaderComponent,
        CommandsComponent,
        CommandDisplayComponent,
        UploaderComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        MatCardModule,
        HttpClientModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
