import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReinitialisationMDPComponent } from './reinitialisation-mdp/reinitialisation-mdp.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';
import { AcceuilComponent } from './acceuil/acceuil.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationPageComponent,
    HeaderComponent,
    ReinitialisationMDPComponent,
    CodeVerificationComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
