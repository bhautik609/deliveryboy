import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DeliveryInfo } from './deliveryinfo';
declare var require: any;
var dateFormat = require('dateformat');
var now = Date.now();
const current_date = dateFormat(now, "yyyy-mm-dd");

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  u_EmailId: string;
  order_id: number;
  Delivery_Information: DeliveryInfo[] = [];
  track_id: number;
  status: string;
  fk_detail_id: number;
  UserName: string;
  bill_date;
  order_payment;
  order_instruction;
  order_amt;
  track_update: FormGroup;
  dcount: number = 0;
  pcount: number = 0;
  ocount: number = 0;
  flag: boolean = false;
  btnflag: boolean = false;
  UserEmailId: string;
  nextStatus;
  name: string[] = ['packing', 'on the way ', 'delivered'];

  constructor(public _ac_routes: ActivatedRoute, public _rou: Router, public _trackData: LoginService) { }

  ngOnInit(): void {
    this.u_EmailId = localStorage.getItem('u_EmailId');
    this.track_update = new FormGroup({
      status: new FormControl(null)
    });
    this.order_id = this._ac_routes.snapshot.params['order_id'];
    // console.log(this.order_id);
    this._trackData.getOnClickInfo(this.order_id).subscribe(
      (data: DeliveryInfo[]) => {
      console.log(data);
        // this.track_id=this.data[0].track_id;
        this.Delivery_Information = data;
        this.track_id = this.Delivery_Information[0].track_id;
        this.status = this.Delivery_Information[0].status;
        this.UserName = this.Delivery_Information[0].user_name;
        this.fk_detail_id = this.Delivery_Information[0].del_id;
        this.order_amt = this.Delivery_Information[0].order_amount;
        this.bill_date = this.Delivery_Information[0].order_date;
        this.order_payment = this.Delivery_Information[0].payment_type;
        this.order_instruction = this.Delivery_Information[0].order_spc_instruction;
        // console.log(this.fk_detail_id);
      }
    );
  }
  ChangeStatus() {
    if (this.status == 'Packing') {
      this.pcount += 1;
      // console.log(this.pcount);
    }
    if (this.status == 'On The Way') {
      this.ocount += 1;
      // console.log(this.ocount, "on");

    }
    if (this.status == 'Delivered') {
      this.btnflag = true;
      // console.log(this.btnflag);

    }
    if (this.pcount == 1) {
      this.nextStatus = 'On The Way';
      alert(' Status Updated!!!!!! Status Has Been Changed from packing to on the way');
    }
    if (this.ocount == 1) {
      this.nextStatus = 'Delivered';
      alert(' Status Updated!!!!!! Status Has Been Changed from on the way to Delivered');
      this.flag = true;
    }
    console.log(this.nextStatus);
    const toBeupdateobj = {
      status: this.nextStatus
    };
    this._trackData.updateuser(this.track_id, toBeupdateobj).subscribe(
      (data1: DeliveryInfo[]) => {
        console.log(this.track_id, toBeupdateobj, data1);
        if (this.nextStatus == 'Delivered') {
          this.bill_date = current_date;
           console.log(current_date);
          console.log(this.bill_date, this.fk_detail_id);
          let dateupdate = {
            detail_id: this.fk_detail_id,
            date: current_date,
          };
          this._trackData.updateDelievryDate(dateupdate).subscribe(
            (data2: any[]) => {
              
               console.log(data2);
              // this._rou.navigate(['/dashboard']);
            }
          );
        }
         this._rou.navigate(['/dashbord']);
      }
    );

  }
  onTrackCancel() {
    this._rou.navigate(['/dashbord']);
  }

}
