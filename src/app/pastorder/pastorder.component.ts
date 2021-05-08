import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeliveryInfo } from '../editorder/deliveryinfo';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {
  user_tbl: DeliveryInfo[] = [];
  user_id;
  displayedColumns: string[] = ['order_id_fk', 'user_name', 'del_date', 'status','order_amount'];
  dataSource: MatTableDataSource<DeliveryInfo>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private serObj: LoginService) {
    this.dataSource = new MatTableDataSource();
   }
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    var u_emailId = localStorage.getItem('u_EmailId');
    var user_id=localStorage.getItem('user_id');
    // console.log(u_emailId);
    this.serObj.getPastOrderDate(user_id).subscribe(
      (data: DeliveryInfo[]) => {
        console.log(data);
        this.user_tbl = data;
        this.dataSource.data = this.user_tbl;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  

}
