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

  entities: string[] = ['Oceans', 'Continents', 'Planets', 'Solar Systems', 'Galaxies'];


}
