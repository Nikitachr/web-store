import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { CATEGORIES, organizationFactory } from 'src/app/shared/providers/category.provider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveComponentModule } from "@ngrx/component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OverlayModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ReactiveComponentModule,
  ],
  providers: [
    {
      provide: CATEGORIES,
      deps: [HttpClientService],
      useFactory: organizationFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
