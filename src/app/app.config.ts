import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
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