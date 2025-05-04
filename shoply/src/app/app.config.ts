import { ApplicationConfig} from '@angular/core';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes, {useHash: true})),
    provideHttpClient(),
  ]
};
