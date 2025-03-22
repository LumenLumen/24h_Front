import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // Autres imports si nécessaire
  ],
  providers: [],
  // Autres configurations
})
export class AppRoutingModule { }