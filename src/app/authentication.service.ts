import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class AuthenticationService {
    url = "https://tribun.azurewebsites.net/fanlig/rest/registration/login_with_email";
    constructor(private http: Http) { }

    login(email: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': 'Bearer 6ce86bc8-3174-4f3e-9955-42c186076689' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, JSON.stringify({ email: email, password: password }), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response

                let user = response.json();
                if (user && user.data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                //console.log(localStorage.getItem('currentUser'))
                //console.log(user)
                //console.log(user.data.token)
            })


    }




    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
