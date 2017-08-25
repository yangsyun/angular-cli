import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InputModelComponent} from './input-model/input-model.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


export const ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'input-model',
      component: InputModelComponent
    },
    {
      path: 'hero-detail',
      component: HeroDetailComponent
    },
];
