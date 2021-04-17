import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  async getClients() {
    const url = `${environment.backend}/assets/clients.json`;
    console.log(url);

    // Return a new promise.
    const response = await fetch(url);
    return await response.json();
  }

}
