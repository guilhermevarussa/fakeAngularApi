import { Component } from '@angular/core';
import { CarsService, } from './cars.service';
import { iCarro } from './iCarros';

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
      .catch(error => console.error(error));

  }

  obterSomenteUm() {
    this.carservice.obterPorId(8)
      .then(carro => console.log(carro))
      .catch(error => console.error(error));
  }

    adicionarCarro() {
      const carro: iCarro = {
        nome: "Civic",
        marca: "Honda"
      };

      this.carservice.adicionar(carro)
        .then(carro => console.log('🟢 Adicionado'))
        .catch(error => console.error(error));
  }

  atualizar() {
    const carro: iCarro = {
      id: 8,
      nome: "Corolla",
      marca: "Toyota"
    };

    this.carservice.atualizar(carro)
      .then(carro => console.log('🔵 Att', carro))
      .catch(error => console.error(error));
  }

  remover() {
    this.carservice.delete(7)
      .then(res => console.log('🔴 Removido', res))
      .catch(error => console.error(error));
  }


}

