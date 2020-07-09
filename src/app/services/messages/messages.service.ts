import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  id: any;
  showSuccessMessage: boolean;

  constructor(private httpClient: HttpClient) { }

  getMessage(id: number) {
    const message_get_url = `http://localhost/api/messages/${id}`;
    return this.httpClient.get(message_get_url);
  }

  postMessage(message: string) {
    const message_url = `http://localhost/api/messages`;
    
    return this.httpClient.post<any>(message_url, {messages: message}).subscribe(data => {
      this.id = data.id;
      this.showSuccessMessage = true;
    })
  }
}
