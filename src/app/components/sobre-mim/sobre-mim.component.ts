import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent implements OnInit{
  mostrarProjetos: boolean = false;
  estadoBotao: string = 'Próximo';

  tituloAtual: string = '';
  titulos: string[] = ['Tecnologias Principais:', 'Conhecimentos Adicionais:'];
  indiceTituloAtual: number = 0;

  subtituloAtual: string = '';
  subtitulos: string[] = ['Possuo conhecimento aprofundado nas seguntes tecnologias:', 'Além das principais tecnologias, possuo experiência e habilidades em outras bibliotecas, linguagens e frameworks, incluindo: '];
  indiceSubTituloAtual: number = 0;

  textoAtual: string = '';
  textos: string[] = [
  'Front-end: HTML, SCSS, JavaScript, TypeScript, Angular\n' +
  'Back-end: Java, Spring, Python, PHP\n' +
  'Banco de Dados: PostgreSQL\n' +
  'Autodidata em Hacking Ético e Segurança Digital',
  'Ext.js\n' +
  'Next.js\n' +
  'JSP\n' +
  'Flask\n'];
  indiceTextoAtual: number = 0;
  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  proximoIndice(indiceAtual: number, array: any[]): number {
    indiceAtual++;
    if (indiceAtual === array.length) {
      indiceAtual = 0;
    }
    return indiceAtual;
  }

  proximoTexto() {
    this.indiceTituloAtual = this.proximoIndice(this.indiceTituloAtual, this.titulos);
    this.tituloAtual = this.titulos[this.indiceTituloAtual];

    this.indiceSubTituloAtual = this.proximoIndice(this.indiceSubTituloAtual, this.subtitulos);
    this.subtituloAtual = this.subtitulos[this.indiceSubTituloAtual];

    this.indiceTextoAtual = this.proximoIndice(this.indiceTextoAtual, this.textos);
    this.textoAtual = this.textos[this.indiceTextoAtual];
    this.estadoBotao = this.estadoBotao === 'Próximo' ? 'Anterior' : 'Próximo';
  }
  redirectToProjects() {
    this.mostrarProjetos = true;
    this.router.navigate(['/projetos']);
  }
}
