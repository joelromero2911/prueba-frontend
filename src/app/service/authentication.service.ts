import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) { }
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }
  // Provide username and password for authentication, and once authentication is successful,
  //store JWT token in session
  // createRequestToken(){
  //   return this.httpClient.get<any>("https://api.themoviedb.org/3/authentication/token/new?api_key=4c6be10a0107ad01eb4f26fad58e0dc4")
  //     .subscribe(
  //       result => {
  //         sessionStorage.setItem("request_token", result.request_token);
  //         let token = result.request_token
  //         this.httpClient.post<any>("https://api.themoviedb.org/3/authentication/session/new?api_key=4c6be10a0107ad01eb4f26fad58e0dc4", {
  //           "request_token":token
  //       })
  //         .subscribe(
  //           result => {
  //             console.log(result)
  //           }
  //         )
  //       }
  //     )
  // }

  authenticate(username: any, password: any) {
    console.log("ok")
    return this.httpClient
      .post<any>("http://localhost:8080/login", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logOut() {
    sessionStorage.clear();
  }

}
