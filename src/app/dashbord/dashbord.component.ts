import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from './user';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  u_EmailId: string;
  user_id;
  u_Name: string;
  order_id: number;
  status: string;
  pro_name: string;
  user_tbl: User[] = [];
  user_tbl1: User[] = [];
  todaysCash: number=0;
  tarck_id: number;
  constructor(private _userdataservice: LoginService, public _dailog: MatDialog, private _roter: Router) { 
    this.dataSource = new MatTableDataSource();
    this.dataSource1 = new MatTableDataSource();
  }
  displayedColumns: string[] = ['order_id', 'user_name', 'user_address', 'action'];

  dataSource: MatTableDataSource<User>;
  dataSource1: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.u_Name = localStorage.getItem('u_Name');
    this.u_EmailId = localStorage.getItem('u_EmailId');
    this.user_id=localStorage.getItem('user_id');
    // console.log(this.u_EmailId);
    this._userdataservice.getUserData(this.user_id).subscribe(
      (data: User[]) => {
        console.log(data);
        this.user_tbl = data;
        this.dataSource1.data = this.user_tbl;
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
      }
    );
    // this._userdataservice.getSimpleCustomerData(this.u_EmailId).subscribe(
    //   (dataSimpleCustomer: User[]) => {
    //     // console.log(dataSimpleCustomer);
    //     this.user_tbl1 = dataSimpleCustomer;
    //     this.dataSource.data = this.user_tbl1;
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // );
    this._userdataservice.getTotalCountTodaysCash(this.u_EmailId).subscribe(
      (data1: any[]) => {
        this.todaysCash = data1[0].total;
        // console.log(this.todaysCash);
        // if (this.todaysCash == null) {
        //   this.todaysCash = 0;
        // }
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  onEditClick(order_id) {
    // console.log(order_id);
    this._roter.navigate(['/editorder', order_id]);
  }


}
