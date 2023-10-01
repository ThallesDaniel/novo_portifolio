import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) { }

  onClickOption(event: Event) {
    const options = this.el.nativeElement.querySelectorAll('.option');

    options.forEach((option: any) => {
      this.renderer.removeClass(option, 'active');
    });

    this.renderer.addClass(event.target, 'active');
  }

}
