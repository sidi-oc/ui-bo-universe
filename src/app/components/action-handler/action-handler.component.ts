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
  
  entitySelected: string;
  continentSelected: boolean;
  oceanSelected: boolean;
  planetSelected: boolean;
  solarSystemSelected: boolean;
  galaxySelected: boolean;

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

  unselectAllFields(){
    this.showIdField = false;
    this.showNameField = false;
    this.showPlanetField = false;
  }

  selectEntity(entity: string){
    this.clearAll();
    switch(entity){
      case "continent": { 
        this.continentSelected = true;
        break;
      }
      case "ocean": { 
        this.oceanSelected = true;
        break;
      }
      case "planet": { 
        this.planetSelected = true;
        break;
      }
      case "solarSystem": { 
        this.solarSystemSelected = true;
        break;
      }
      case "galaxy": { 
        this.galaxySelected = true;
        break;
      }
      case "option": { 
        break;
      }
      default: {
        console.error(`invalid entity selected`);
        break;
      }
    }

    return this.entitySelected;
  }

  selectAction(action: string){
    this.clearAction();
    this.unselectAllFields();
    this.continentService.hideAllMessages();

    switch(action){
      case "get": { 
        this.get = true;
        this.showIdField = true;
        break;
      }
      case "post": { 
        this.post = true;
        this.showPlanetField = true;
        this.showNameField = true;
        break;
      }
      case "del": { 
        this.del = true;
        this.showIdField = true;
        break;
      }
      case "put": { 
        this.put = true;
        this.showPlanetField = true;
        this.showNameField = true;
        this.showIdField = true;
        break;
      }

      case "option": {
        break;
      }
     
      default: {
        console.error(`invalid action selected`);
        break;
      }
    }
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
    this.continentService.hideAllMessages();
  }



}
