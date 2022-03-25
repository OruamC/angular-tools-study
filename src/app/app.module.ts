import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

@NgModule({
  declarations: [AppComponent, SobreComponent, CadastroComponent],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, CadastroGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
