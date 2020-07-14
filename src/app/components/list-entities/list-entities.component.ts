import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-entities',
  templateUrl: './list-entities.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListEntitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entities: string[] = ['Continents', 'Oceans', 'Planets', 'Solar Systems', 'Galaxies'];
  selected_entity: string

}
