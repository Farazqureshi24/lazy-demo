import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { departmentReducer } from './auth/store/department/department.reducer';
import { DepartmentEffects } from './auth/store/department/department.effect';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ departments: departmentReducer }), // Added 'departments' state with authReducer as a placeholder
    provideEffects([DepartmentEffects]), 
     provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'NgRx Users Demo'
    }),
  ]
};
