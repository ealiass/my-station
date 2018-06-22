import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './app/google-map.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/google-map', pathMatch: 'full' },
    { path: 'google-map', component: GoogleMapComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);