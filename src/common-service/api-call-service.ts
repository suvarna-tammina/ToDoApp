/** Angular imports */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

/** rxjs imports */
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

/** Third party imports  */

import { ApiCallClass } from './api-call-model';



@Injectable()
export class ServerApi {

apiUrl='http://localhost:3000';
    constructor(private http: Http, private router: Router){

}
callLogin(data): Observable<any> {
     try {
        // if (data[0].method == 'POST') {

        // }
        // else{
            console.log("comimg in else in serviec");
            let str = Object.keys(data).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            }).join('&');
            console.log("comimg in else in str---"+str);
            return this.http.get(this.apiUrl+'/loginApi/login'  + '?' + str).map(this.extractData);
            
     //   }
    }
    catch(e){
        console.log("error message"+e.message);
    }
  

}

getAllUsers(): Observable<any[]>{
                 return this.http.get(this.apiUrl+'/api/getList')
                 .map(this.extractData)
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
             
}
deleteUser(id): Observable<any[]>{
    return this.http.get(this.apiUrl+'/api/deleteItem/'+id)
    .map(this.extractData)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
addUser(data): Observable<any> {
    try {    
           console.log("comimg in else in serviec");
           let str = Object.keys(data).map(function (key) {
               return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
           }).join('&');
           console.log("comimg in else in str---"+str);
           return this.http.get(this.apiUrl+'/api/addItem'  + '?' + str).map(this.extractData);
          
   }
   catch(e){
       console.log("error message"+e.message);
   }

}
updateUser(data): Observable<any> {
    try {    
           console.log("comimg in else in serviec");
           let str = Object.keys(data).map(function (key) {
               return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
           }).join('&');
           console.log("comimg in else in str---"+str);
           return this.http.get(this.apiUrl+'/api/updateItem'  + '?' + str).map(this.extractData);
          
   }
   catch(e){
       console.log("error message"+e.message);
   }

}
public extractData = function (res: Response) {
    let body = res.json();
    console.log('succes bodey-->'+(body));
    return body || {};
}
}