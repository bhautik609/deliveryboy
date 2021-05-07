import {  NgModule,Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditorderComponent } from './editorder/editorder.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'dashbord',component:DashbordComponent},
 {path:'editorder/:order_id',component:EditorderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
