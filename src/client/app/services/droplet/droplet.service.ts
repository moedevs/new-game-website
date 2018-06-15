import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DropletService {

  constructor(private http: HttpClient) { }

  public fetchCpuUsage(){
    return this.http.get('https://cloud.digitalocean.com/api/v1/droplets/94755922/statistics/cpu?period=hour')
  }
}
