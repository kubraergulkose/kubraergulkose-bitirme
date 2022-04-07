import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}

  getProduct () {
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getSingleProduct (par_id:any) {
    return this.http.get<any>("https://fakestoreapi.com/products/"+par_id)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  ////*********yeni user kayıt işleminde, register işleminde apimize kayıt etme fonksiyonu. */
  postUser (user:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer f2eafbc1b31a1aba3e8d6215b7d952b1fdf7d75f1203a58dd8b82a5ec5e616d7'
    });
    let options = { headers: headers };
    this.http.post<any>('https://gorest.co.in/public/v1/users', user, options)
    .subscribe(res => {
      alert ("Kayıt başarılı" +res.data.id + res.data.email);

  });
  }

   //************kişi apimizde kayıtlı mı kontrolü için.********************
   //****************kullandığım go.rest api, kayıt olununca bir key veriyor */
   //**********Authorization şifresini header kısmına girmemiz gerekiyor. */
  getSingleUser(email:any,password:any): Observable<any>  {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer f2eafbc1b31a1aba3e8d6215b7d952b1fdf7d75f1203a58dd8b82a5ec5e616d7'
    });
    let options = { headers: headers };
    let url = ("https://gorest.co.in/public/v1/users"+`?name=${password}&email=${email}`);
    return this.http.get<any>(url,options);
  }


  //*********go.rest api'sinden commentleri alma metodu tanımladım. */
  getComment(comment_id:any): Observable<any>  {
    let url_comment = ("https://gorest.co.in/public/v1/comments"+`?post_id=${comment_id}`);
    return this.http.get<any>(url_comment);

  }

   }

