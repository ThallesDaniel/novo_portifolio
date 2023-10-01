import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent {
  constructor(private router: Router) {}
  redirectToProjects() {
    console.log('Redirecionando para /projetos');
    this.router.navigate(['/projetos']); // Redireciona o usuário para a rota /projetos
  }

}
