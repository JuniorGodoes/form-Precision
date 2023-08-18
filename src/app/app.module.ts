import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { CnpjFormatDirective } from './cnpj-format.directive';
import { RelatorioComponent } from './relatorio/relatorio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaInicialComponent,
    FormComponent,
    ConfirmacaoComponent,
    CnpjFormatDirective,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
