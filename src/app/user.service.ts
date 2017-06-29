import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user';
import { Post } from './post'

@Injectable()
export class UserService {
    url = "https://tribun.azurewebsites.net/fanlig/rest/registration/login_with_email";
    currentUser: User;



    constructor(private http: Http)
    {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }



    post(text: string, link: string) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let image = localStorage.getItem('image');
        let headers = new Headers({ 'authorization': 'Bearer ' + this.currentUser.data.token, 'content-type': 'application/json', 'language': 'tr' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("https://tribun.azurewebsites.net/fanlig/rest/post/share", JSON.stringify({ userId: this.currentUser.data.user.id, text: text, image: image, link: link}), options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response

                let post = response.json();
                console.log(post)
                localStorage.removeItem("image");
            })
    }









    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.data.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.data.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private extractData(res: Response) {
	      let body = res.json();
        return body.data || {};
    }
    private handleErrorObservable (error: Response | any) {
      	console.error(error.message || error);
      	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
      	console.error(error.message || error);
      	return Promise.reject(error.message || error);
    }
}
