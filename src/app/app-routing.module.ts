import {  NgModule,Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditorderComponent } from './editorder/editorder.component';
import { LoginComponent } from './login/login.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'dashbord',component:DashbordComponent},
 {path:'editorder/:order_id',component:EditorderComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'profile',component:ProfileComponent},
 {path:'pastorder',component:PastorderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
