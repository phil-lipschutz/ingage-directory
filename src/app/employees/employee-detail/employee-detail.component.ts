import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppTitleService } from 'src/app/app.service';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, AfterViewInit {
  employeeId = '';
  employee;

  constructor(
    private route: ActivatedRoute,
    private appTitleService: AppTitleService,
    private titleService: Title,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    const empId = this.route.snapshot.params.id;
    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];
  }

  ngAfterViewInit() {
    const title = this.employee.firstname + ' ' + this.employee.lastname;
    this.titleService.setTitle(title);
    setTimeout(_ => this.appTitleService.setAppTitle(title));
  }
}
