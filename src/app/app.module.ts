import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { ListEntitiesComponent } from './components/list-entities/list-entities.component';
import { ActionHandlerComponent } from './components/action-handler/action-handler.component';
import { HttpClientModule } from '@angular/common/http'
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniverseFormComponent } from './components/universe-form/universe-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
 




@NgModule({
  declarations: [
    AppComponent,
    ListEntitiesComponent,
    ActionHandlerComponent,
    UniverseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
