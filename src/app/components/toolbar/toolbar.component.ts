import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isMenuOpen = false;
  selectedLanguage = 'pt';

  constructor(private translateService: TranslateService, private elementRef: ElementRef, private renderer: Renderer2, private router: Router) {
    this.translateService.setDefaultLang('pt');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const matToolbar = this.elementRef.nativeElement.querySelector('.mat-toolbar');
    if (matToolbar) {
      if (this.isMenuOpen) {
        this.renderer.addClass(matToolbar, 'menu-open');
      } else {
        this.renderer.removeClass(matToolbar, 'menu-open');
      }
    }
  }

  refreshPage() {
    this.router.navigate(['/']).then(() => {
      location.reload();
    });
  }


  changeLanguage() {
    this.translateService.use(this.selectedLanguage);
  }
}
