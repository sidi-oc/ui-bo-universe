import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniverseBO } from 'src/app/bo-interface';

@Injectable({
  providedIn: 'root'
})

export class ContinentsService {
  post_id: string;
  continent_url: string = "http://localhost/api/continents";
  continent_name: string;
  continent_planet: string;
  showSuccessMessage: boolean = false;
  showGetMessage: boolean = false;
  showDeleteMessage: boolean = false;

  constructor(private httpClient: HttpClient) { }

  getContinent(id: string) {
    let get_url = `${this.continent_url}/${id}`;
    console.log(get_url);
    return this.httpClient.get<UniverseBO>(get_url).subscribe(data => {
      this.post_id = data.id;
      this.continent_name = data.name;
      this.continent_planet = data.planet;
      this.showGetMessage = true;
    });
  }

  getAllContinents(){
    return this.httpClient.get(this.continent_url);
  }

  postContinent(continentName: string, planetID?: string) {    
    return this.httpClient.post<UniverseBO>(this.continent_url, {name: continentName, planet: planetID}).subscribe(data => {
      this.post_id = data.id;
      this.continent_name = data.name;
      this.showSuccessMessage = true;
      }
    )
  }

  deleteContinent(id: string){
    let delete_url = `${this.continent_url}/${id}`;
    return this.httpClient.delete<UniverseBO>(delete_url).subscribe(data => {this.showDeleteMessage = true;});
  }

  putContinent(id: string, updatedName?: string, updatedPlanet?: string){
    let put_url = `${this.continent_url}/${id}`;
    return this.httpClient.put<UniverseBO>(put_url, {name: updatedName, planet: updatedPlanet}).subscribe(data => {
      this.post_id = data.id;
      this.continent_name = data.name;
      this.continent_planet = data.planet;
      this.showGetMessage = true;
      })
  }

  hideAllMessages(){
    this.showSuccessMessage = false;
    this.showDeleteMessage = false;
    this.showGetMessage = false;
  }
}
