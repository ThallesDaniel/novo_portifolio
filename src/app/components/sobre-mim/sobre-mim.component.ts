import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent {
  // Adicione uma variável de controle para mostrar/ocultar o componente app-projetos
  mostrarProjetos: boolean = false;

  constructor(private router: Router) {}

  // Método para redirecionar para a rota de projetos
  redirectToProjects() {
    this.mostrarProjetos = true; // Define a variável como verdadeira
    this.router.navigate(['/projetos']); // Redireciona para a rota de projetos (ajuste isso conforme suas configurações de rota)
  }
}
