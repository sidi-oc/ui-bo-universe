import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'action-handler',
  templateUrl: './action-handler.component.html',
  styleUrls: ['../../app.component.css']
})
export class ActionHandlerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
