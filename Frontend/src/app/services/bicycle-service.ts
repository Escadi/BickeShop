import { Injectable, ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  endpoint = 'http://localhost:8080/api/bicycles';


  constructor(private httpClient: HttpClient) { }


  /** --------------------------------------------------------------------------------------
   * |                            'ENDS POINTS' TO API CALL                                 | 
   *  --------------------------------------------------------------------------------------
   */

  // SHOW ALL BICYCLES (GET)
  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  // CREATE THE NEW BICYCLE (POST)
  create(bicycle: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    const body = new URLSearchParams();
    body.append("brand", bicycle.brand);
    body.append("model", bicycle.model);
  
    return this.httpClient.post(this.endpoint,body.toString(),{headers});
    
  }
  update(bike:any){
    return this.httpClient.put(`${this.endpoint}/${bike.id}`,bike);
  }
  delete(id:any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

}
