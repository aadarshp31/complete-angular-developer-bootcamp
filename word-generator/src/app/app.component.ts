import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;
  countries = '';
  countryLimit = 5;

  handleSlideChange = (newLimit: number) => {
    this.limit = newLimit;
  }

  generate = () => {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  generateCountries = () => {
    this.countryLimit = Math.ceil(Math.random()*20)
    this.countries = arrayCountries.slice(0, this.countryLimit).join(' ');
  }

}
