import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    CountryTableComponent,
    CommonModule,
    NgClass,
  ],
  providers: [CountriesService],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
