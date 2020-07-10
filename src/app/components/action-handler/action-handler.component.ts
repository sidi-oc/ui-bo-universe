import { Component, OnInit } from '@angular/core';
import { ContinentsService } from 'src/app/services/continents/continents.service';


@Component({
  selector: 'action-handler',
  templateUrl: './action-handler.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [ContinentsService]
})

export class ActionHandlerComponent implements OnInit {
  showIdField : boolean = false;
  showNameField: boolean = false;
  showPlanetField: boolean = false;

  continentId: string;
  continentName: string;
  planetId: string;

  continentSelected: boolean = false;
  oceanSelected: boolean = false;
  planetSelected: boolean = false;
  solarSystemSelected: boolean = false;
  galaxySelected: boolean = false;

  actionSelected: string;
  get: boolean = false;
  put: boolean = false;
  del: boolean = false;
  post: boolean = false;

  constructor(public continentService: ContinentsService) { }

  ngOnInit(): void {
  }

  unselectAllEntities(){
    this.continentSelected = false;
    this.oceanSelected = false;
    this.planetSelected = false;
    this.solarSystemSelected = false;
    this.galaxySelected = false;
  }

  selectContinent(){
    this.continentSelected = true;
  }

  unselectAllFields(){
    this.showIdField = false;
    this.showNameField = false;
    this.showPlanetField = false;
  }

  displayIdField (){
    this.showIdField = true;
  }

  displayNameField (){
    this.showNameField = true;
  }

  displayPlanetField (){
    this.showPlanetField = true;
  }

  selectAction(action: string){
    this.actionSelected = action;
    return this.actionSelected
  }

  clearData(){
    this.continentId = null;
    this.continentName = null;
    this.planetId = null;
  }

  clearAction(){
    this.get = false;
    this.put = false;
    this.post = false;
    this.del = false;
  }

  clearAll(){
    this.unselectAllEntities();
    this.unselectAllFields();
    this.clearData();
    this.clearAction;
  }

  actionGet(){this.get = true;}

  actionPut(){this.put = true;}

  actionDel(){this.del = true;}

  actionPost(){this.post = true;}

}
