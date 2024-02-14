import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent {
  mostrarProjetos: boolean = false;

  constructor(private router: Router) {}

  redirectToProjects() {
    this.mostrarProjetos = true;
    this.router.navigate(['/projetos']);
  }
}
