import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  error: string;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('laura@gmail.com'),
      password: new FormControl('12345')
    });

    this.error = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';
    this.usuariosService.login(this.formulario.value)
      .then(response => {
        if (response.error) {
          this.error = response.error;
        } else {
          localStorage.setItem('token_gym', response.token);
          alert('Login correcto!!');
          this.usuariosService.logged(true);
          this.router.navigate(['/clientes']);
        }
      })
      .catch(err => console.log(err));
  }
}
