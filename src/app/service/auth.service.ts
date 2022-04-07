import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class AuthService {


  private isLogedAdmin:any;
  constructor(private httpClient: HttpClient) { }


  /*login(email:any,password:any) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer f2eafbc1b31a1aba3e8d6215b7d952b1fdf7d75f1203a58dd8b82a5ec5e616d7'
    });
    let options = { headers: headers };
    let url = ("https://gorest.co.in/public/v1/users"+`?name=${password}&email=${email}`);
    return this.httpClient.get<any>(url,options).subscribe(res => {
      localStorage.setItem("token", res.password);
      this.isLoged=true;
    });


  }*/





  isLoggedAdminIn() {
    if (localStorage.getItem("isAdmin")=="true") {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem("token");
  }


}
