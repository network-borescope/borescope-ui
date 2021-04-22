import { Injectable } from '@angular/core';
import { environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url: string  = env.backend;

  //busca os dados dos clientes(pop) 
  async getClients() {
    const url = `${env.backend}/assets/clients.json`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return await response.json();
  }







}
