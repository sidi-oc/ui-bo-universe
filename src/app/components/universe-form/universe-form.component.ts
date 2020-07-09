import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from 'src/app/services/messages/messages.service';


@Component({
  selector: 'universe-form',
  templateUrl: './universe-form.component.html',
  styleUrls: ['../../app.component.css'],
  providers:  [ MessagesService ]
})
export class UniverseFormComponent implements OnInit {

  messages_recorded;

  constructor(private httpClient: HttpClient, public msgService: MessagesService) { }

  ngOnInit(): void {
  }

  entities: string[] = ['Oceans', 'Continents', 'Planets', 'Solar Systems', 'Galaxies', 'Other'];
}

