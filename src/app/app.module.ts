import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ProjetosComponent } from './components/projetos/projetos.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        SobreMimComponent,
        MenuLateralComponent,
        ProjetosComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatSelectModule,
        FormsModule,
        MatToolbarModule,
        AppRoutingModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        MatTabsModule
    ]
})
export class AppModule { }
