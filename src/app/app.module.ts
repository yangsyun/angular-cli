import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {COMPONENT_PROVIDERS, PIPE_PROVIDERS} from './app.providers';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ROUTES} from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {SERVICE_PROVIDERS} from './app.providers';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_PROVIDERS,
    ...PIPE_PROVIDERS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [SERVICE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
