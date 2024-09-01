import { Component } from '@angular/core';
import { HttpService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProductDetails';
  constructor(
    private httpService: HttpService,
  ) {
    this.httpService.getProductsList();
  }
}

