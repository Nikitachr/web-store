import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveComponentModule } from '@ngrx/component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { reducers, metaReducers } from './core/reducers';
import { environment } from 'src/environments/environment';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { CATEGORIES, organizationFactory } from 'src/app/shared/providers/category.provider';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
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
    HammerModule
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
