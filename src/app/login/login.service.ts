import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string= environment.url+"deliveyBoylogin/";
  public urldash: string = environment.url + "deliverdashboard/";
  public urlCashCount: string = environment.url + 'TodaysCash/';
  public url_info: string = environment.url + "deliver_info/";
  public urlDate: string = environment.url + 'updateDeliveyDate/';
  public url1: string = environment.url +'_user/';
  constructor(private _http:HttpClient) { }
  login(obj)
  {
    const body=JSON.stringify(obj);
    const head=new HttpHeaders().set(environment.headname,environment.headvalue);
    return this._http.post(this.url,body,{headers:head});
  }
  getUserData(fk_u_EmailId) {
    return this._http.get(this.urldash + fk_u_EmailId);
  }
  getTotalCountTodaysCash(u_EmailId) {
    return this._http.get(this.urlCashCount + u_EmailId);
  }
  getOnClickInfo(order_id) {
    console.log(order_id);
    return this._http.get(this.url_info + order_id);
  }
  updateuser(track_id, item) {
    console.log(track_id);
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.headname, environment.headvalue);
    return this._http.put(this.urldash + track_id, body, { headers: head1 });
  }
  updateDelievryDate(item) {
    console.log(item);
    //let body = JSON.stringify(item);
    //let head1 = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.urlDate, item);
  }
  getPastOrderDate(fk_u_EmailId) {
    console.log(fk_u_EmailId);
    return this._http.get(this.urlDate + fk_u_EmailId);
  }
  getuserbyemailid(user_id) {
    return this._http.get(this.url1 + user_id);
  }
  edituser(user_id, item) {
    return this._http.put(this.url1 + user_id, item);
  }

}
