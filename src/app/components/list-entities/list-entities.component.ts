import { Component, OnInit } from '@angular/core';
import { ContinentsService } from 'src/app/services/continents/continents.service';

@Component({
  selector: 'list-entities',
  templateUrl: './list-entities.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListEntitiesComponent implements OnInit {
  entitySelected: string;

  constructor(public continentService: ContinentsService) { }

  ngOnInit(): void {
  }

  entities: string[] = ['Continents', 'Oceans', 'Planets', 'Solar Systems', 'Galaxies'];
  selected_entity: string

}
