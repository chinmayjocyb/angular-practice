import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details';
import { ProductListComponent } from './product-list/app.product-list';
import { AppRoutingModule } from './app.routes';
import { addProductReducer } from './product-store/product-list-reducer';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductDetailsComponent,
    ProductListComponent,
    StoreModule.forRoot({ product: addProductReducer }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
