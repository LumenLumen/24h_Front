import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageBody } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class AgentAPIService {

    baseUrl = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  postMessage(message: MessageBody){
    console.log(message);
    return this.http.post(this.baseUrl+'message/',message);
  }
    
}
