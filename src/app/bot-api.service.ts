import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface IHifumiAPIResponse {
    stats: {
        users?: number;
        guilds?: number;
    }
    code: number;
}

@Injectable()
export class BotApiService {
    private readonly headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.set('Access-Control-Allow-Origin', '*');
    }
    public getStats(): Observable<any> {
        return this.http.get('http://api.testhifumi.io:3000/stats', {headers: this.headers});
    }
}
