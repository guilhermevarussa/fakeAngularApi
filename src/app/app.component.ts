import { Component } from '@angular/core';
import { CarsService, } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApiRequest';

  constructor(private carservice: CarsService) { }


  getAllCars() {
    this.carservice.getAll()
      .then(carros => console.log(carros))
      .catch (error => console.error(error));
      
  }


}

