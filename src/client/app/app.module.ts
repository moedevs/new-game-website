import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from './home/home.component';
import {DropletComponent} from './droplet/droplet.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { UploaderComponent } from './services/uploader/uploader.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        DropletComponent,
        UploaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
