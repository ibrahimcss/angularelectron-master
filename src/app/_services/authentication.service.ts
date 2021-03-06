import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {

    state: boolean;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.state = true;
                return user;

            }));


    }

    isLoginSuccess(){
      const user = JSON.parse(localStorage.getItem('currentUser'));
      return user && user.token;

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.state = false;
    }
}
