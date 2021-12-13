import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  search: string;

  constructor(private router: Router) {
    this.search = ''
  }

  ngOnInit(): void {
  }


  searchTitle(): void {
    this.router.navigate(['search', this.search]);
  }

}
