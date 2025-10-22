import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { Imprint } from './imprint/imprint';

export const routes: Routes = [
    { path: '', component: MainContent },
    { path: 'imprint', component: Imprint }
];
