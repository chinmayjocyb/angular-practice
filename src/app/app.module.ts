import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details';
import { ProductListComponent } from './product-list/app.product-list';


@NgModule({
  declarations: [AppComponent, ProductDetailsComponent, ProductListComponent],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule, //imported the module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
