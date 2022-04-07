import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { AlertifyService } from "./alertify.service";


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router, private alertify: AlertifyService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isLoggedAdminIn();
    console.log("logged111");
      console.log(logged);
      console.log("logged222");
    if (logged) {
      return true;
    }
    this.router.navigate(["login"]);
    alert("Sadece admin bu sayfaya erişebilir!!!");
    this.alertify.error("Sayfaya erişim için sisteme giriş yapmalısınız!");
    return false;
  }
}
