import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './countries/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';



export const routes: Routes = [
    {
      path: 'country/by-capital',
      component: ByCapitalPageComponent,
    },
    {
      path: 'country/by-country',
      component: ByCountryPageComponent,
    },
    {
      path: 'country/by-region',
      component: ByRegionPageComponent,
    },
    {
      path: 'country/by/:id',
      component: CountryPageComponent,
    },
    {
      path: '**',
      redirectTo: 'by-capital'
    }
  
  ]