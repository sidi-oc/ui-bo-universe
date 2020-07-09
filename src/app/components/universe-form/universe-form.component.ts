import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'universe-form',
  templateUrl: './universe-form.component.html',
  styleUrls: ['../../app.component.css']
})
export class UniverseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entities: string[] = ['Oceans', 'Continents', 'Planets', 'Solar Systems', 'Galaxies', 'Other'];
}
