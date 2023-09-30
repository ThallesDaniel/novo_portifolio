import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { HomeComponent } from './home.component';
import { SobreComponent } from './sobre.component';
import { PlanosComponent } from './planos.component';
import { CoberturaComponent } from './cobertura.component'; */

const routes: Routes = [
/*   { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'cobertura', component: CoberturaComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
