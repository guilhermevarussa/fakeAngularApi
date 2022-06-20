import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { iCarro } from './iCarros'

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpCliente: HttpClient) { }


  getAll() {

    return this.httpCliente.get<iCarro[]>(`${API_PATH}Carros`).toPromise();

  }
}
