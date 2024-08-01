import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    LoadingSpinnerComponent,
    CommonModule,
    CountryTableComponent,
  ],
  providers: [CountriesService],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];

  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
    this.countries = this.countriesService.cacheStore.byCapital.countries;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
