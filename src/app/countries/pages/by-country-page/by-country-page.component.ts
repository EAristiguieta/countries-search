import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    LoadingSpinnerComponent,
    CommonModule,
    CountryTableComponent,
  ],
  providers: [CountriesService],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
