import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./common/common-module').then(m => m.CommonFeatureModule)
    },
];
