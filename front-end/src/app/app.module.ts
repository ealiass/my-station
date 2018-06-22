import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs';
import { AppComponent } from './app.component';
import { GoogleMapComponent    } from './google-map.component';
import { CONST_ROUTING } from 'src/app.routing'; 

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyAvrd2LwFEnC6KmlxKraNARCzn8NnDtkqg',
});

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    googleMapsCore,
    AgmCoreModule,
    CONST_ROUTING
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
