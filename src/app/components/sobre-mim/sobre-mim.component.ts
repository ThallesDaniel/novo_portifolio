import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent implements OnInit{
  mostrarProjetos: boolean = false;

  tituloAtual: string = '';
  titulos: string[] = ['Tecnologias Principais:', 'Conhecimentos Adicionais'];
  indiceTituloAtual: number = 0;

  textoAtual: string = 'Olá! Meu nome é Thalles Daniel e sou um desenvolvedor ' +
    'Full-Stack Web apaixonado por criar soluções inovadoras e eficientes. ' +
    'Com uma sólida formação e experiência em diversas tecnologias, estou sempre pronto para enfrentar desafios e' +
    ' entregar produtos de alta qualidade. ' +
    'Aqui está um pouco do que posso oferecer:';
  textos: string[] = ['Front-end: HTML, SCSS, JavaScript, TypeScript, Angular\n' +
  '\n' +
  'Back-end: Java, Spring, Python, PHP\n' +
  '\n' +
  'Banco de Dados: PostgreSQL\n' +
  '\n' +
  'Autodidata em Hacking Ético e Segurança Digital', 'Além das principais tecnologias, possuo experiência e habilidades em outras bibliotecas, linguagens e frameworks, incluindo:\n' +
  '\n' +
  'Ext.js\n' +
  '\n' +
  'Next.js\n' +
  '\n' +
  'JSP\n' +
  '\n' +
  'Flask\n' +
  '\n' +
  'Estou sempre buscando aprender mais e me manter atualizado com as últimas tendências e melhores práticas da indústria.' +
  ' Estou disponível para colaborações, projetos desafiadores e oportunidades que me permitam crescer profissionalmente.'];
  indiceTextoAtual: number = 0;
  ngOnInit(): void {
  }
  constructor(private router: Router) {}
  proximoTexto() {
    this.indiceTituloAtual++;
    if (this.indiceTituloAtual === this.titulos.length) {
      this.indiceTituloAtual = 0;
    }
    this.tituloAtual = this.titulos[this.indiceTituloAtual];

    this.indiceTextoAtual++;
    if (this.indiceTextoAtual === this.textos.length) {
      this.indiceTextoAtual = 0;
    }
    this.textoAtual = this.textos[this.indiceTextoAtual];
  }
  redirectToProjects() {
    this.mostrarProjetos = true;
    this.router.navigate(['/projetos']);
  }
}
