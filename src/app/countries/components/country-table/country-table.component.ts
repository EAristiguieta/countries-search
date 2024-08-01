import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, RouterModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
