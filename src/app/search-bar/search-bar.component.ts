import { Component, OnInit } from '@angular/core';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
showSearchBar = true;

  constructor(private searchBarService: SearchBarService) { }

  ngOnInit() {
    this.searchBarService.showSearchBar.subscribe(val => this.showSearchBar = val);
  }

  onKey(value: string) {
    this.searchBarService.setSearchText(value);
  }

}
