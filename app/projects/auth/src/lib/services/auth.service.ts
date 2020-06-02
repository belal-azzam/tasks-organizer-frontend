import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";



export interface ApplicationUser {
  accessToken: string;
  expiresIn: Date;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<ApplicationUser>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  private currentUserSubject : BehaviorSubject<ApplicationUser>;
  public currentUser: Observable<ApplicationUser>;

  login(username: string, password: string) {
    return this.http.post<any>('/auth/login', {username, password}).pipe(map(user => {
      if (user && user.accessToken) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
      }
     )
    );
  }

  register(username: string, password: string, email: string) {
    return this.http.post<any>('/auth/register', {username, password, email}).pipe(map((res:any)=> {
        if(res.success) {
          return true;
        }
      }
      )
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject.value;
  }
}
