import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleRecetasComponent } from './components/detalle-recetas/detalle-recetas.component';
import { LoginGuard } from './components/guard/login.guard';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'recetas', component: RecetasComponent, canActivate: [LoginGuard] },
  { path: 'recetas/:recetasId', component: DetalleRecetasComponent, canActivate: [LoginGuard] },
  { path: 'blog', component: BlogComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'contacto', component: ContactoComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
