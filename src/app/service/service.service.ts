import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://3.90.234.191:3000';

  constructor(private http: HttpClient) { }

  // Método para enviar o POST para o servidor Node.js
  enviardados(dados: any) {
    return this.http.post(`${this.apiUrl}/criar_registro`, dados);
  }

  listdados(){
    return this.http.get(this.apiUrl);
  }

}
