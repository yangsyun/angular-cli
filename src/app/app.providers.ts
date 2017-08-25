import {HomeComponent} from './home/home.component';
import {InputModelComponent} from './input-model/input-model.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero-detail/heroes.service';

export const COMPONENT_PROVIDERS = [
    HomeComponent,
    InputModelComponent,
    HeroDetailComponent
];
export const PIPE_PROVIDERS = [

];

export const SERVICE_PROVIDERS = [
  HeroService
];
