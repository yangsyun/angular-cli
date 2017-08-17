import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InputModelComponent} from './input-model/input-model.component';


export const ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'input-model',
      component: InputModelComponent
    },
];
