import { Component, OnInit } from '@angular/core';
import { LoginService } from './../auth/login.service';
import { DataService } from 'src/app/employees/data.service';
import { Employee } from '../employees/employee';
import { SearchBarService } from '../search-bar/search-bar.service';


@Component({
  selector: 'app-champion-a-cause',
  templateUrl: './champion-a-cause.component.html',
  styleUrls: ['./champion-a-cause.component.css']
})

export class ChampionACauseComponent implements OnInit {
  public employees: Employee[];
  private showSearchBar = true;
  searchText = '';

  constructor(
    public loginService: LoginService,
    private searchBarService: SearchBarService,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.searchBarService.showSearchBar.subscribe(toggle => this.showSearchBar = toggle);
    this.searchBarService.searchText.subscribe(text => this.searchText = text);
    this.employees = this.dataService.getEmployees()
      .filter(f => f.title.toLowerCase() !== 'intern' && f.title.toLowerCase() !== 'apprentice' && f.title.toLowerCase() !== 'analyst' && f.title.toLowerCase() !== 'contractor');
    this.sortByCause();
  }
  filterChampion(sortVal: string) {
    if (sortVal === 'cause') {
      this.sortByCause();
    }
    if (sortVal === 'name') {
      this.sortByName();
    }
  }

  private sortByName() {
    const sorted = this.employees.sort((a, b) => {
      const nameA = a.firstname.toUpperCase() + a.lastname.toUpperCase();
      const nameB = b.firstname.toUpperCase() + b.lastname.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }

  private sortByCause() {
    const sorted = this.employees.sort((a, b) => {
      const nameA = a.champion.toUpperCase();
      const nameB = b.champion.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }

}
