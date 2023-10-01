import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';

const routes: Routes = [
  { path: '', component: SobreMimComponent },
  { path: 'sobre', component: SobreMimComponent },
  { path: 'projetos', component: ProjetosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
