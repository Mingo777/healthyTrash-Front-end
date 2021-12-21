import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  search: string;
  estado: boolean;

  constructor(private router: Router) {
    this.search = ''
    this.estado = false;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('token_healthy_trash'));

    if (localStorage.getItem('token_healthy_trash') !== null) {
      this.estado = true
    } else {
      this.estado = false
    }
  }

  ngDoCheck(): void {
    console.log(localStorage.getItem('token_healthy_trash'));
    if (localStorage.getItem('token_healthy_trash') !== null) {
      this.estado = true
    } else {
      this.estado = false
    }
    console.log(this.estado);

  }

  onLogOut() {
    localStorage.removeItem('token_healthy_trash');
    this.estado = false;
    this.router.navigate(['/login']);
  }


  searchTitle(): void {
    this.router.navigate(['search', this.search]);
  }

}
