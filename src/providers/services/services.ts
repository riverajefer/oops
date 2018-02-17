import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesProvider {

  END_POINT = 'http://132.148.146.12/RestApiOOps/';
  URI_TOGGLE_DOOR = 'api/Taquilla/AbrirCerrarPueta';
  URI_TOKEN = 'token';
  params_door = {
    idPuerta: "1",
    codigoApertura: "0",
    idCliente: "1",
    abrir: false
  }

  constructor(public http: HttpClient) {
    this.getToken();
  }

  toggleDoor(status: boolean) {

    console.log('toggleDoor');

    const token = localStorage.getItem('token');

    const headers = {
      headers: new HttpHeaders({
        'authorization': 'bearer ' + token,
      })
    };

    this.params_door.abrir = status;

    return this.http
      .post(this.END_POINT + this.URI_TOGGLE_DOOR, this.params_door, headers)
      .toPromise()
      .then((response) => {
        return response['AccionRealada'];
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

 private  getToken() {
    console.log('getToken');

    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    const data = 'grant_type=password&UserName=""&Password=""';
    return this.http
      .post(this.END_POINT + this.URI_TOKEN, data, headers)
      .toPromise()
      .then((response) => {
        let token = response['access_token']
        localStorage.setItem('token', token);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

}
