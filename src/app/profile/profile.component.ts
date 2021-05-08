import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';
import { user } from './user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //list: productdisplay[] = [];
  u_EmailId: string;

  selectedfile: File = null;
  photourl;
  userform:FormGroup;
  userurl: string = null;
  constructor(private _ser:LoginService,private _router:Router) { }

  ngOnInit(): void {
    this.u_EmailId = localStorage.getItem('user_id');
    this.userform= new FormGroup({
      user_id:new FormControl(null),
      
      user_name:new FormControl(null,[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      user_password:new FormControl(null,[Validators.required]),
      user_email:new FormControl(null,[Validators.required,Validators.email]),
      user_age:new FormControl(null,Validators.required),
      user_gender:new FormControl(null),
      user_mob:new FormControl(null,[Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      user_address:new FormControl(null,Validators.required),
      user_type:new FormControl(null)
    });    
    
  
  
  this._ser.getuserbyemailid(this.u_EmailId).subscribe(
    (data:user[]) => {
      console.log(data);
      this.formDataBind(data[0]);
      // console.log(data[0]);
    }
  );
  }
  onUserUpdate() {}
  onUserCancel() {}
  editImageuser(u_EmailId) {}
  formDataBind(item:user) {
      this.photourl = environment.url + "/images/user/" + item.user_img; 
      this.userform.patchValue({
        user_id:item.user_id,
      user_password:item.user_password,
        user_name:item.user_name,
        user_email:item.user_email,
        user_age:item.user_age,
        user_gender:item.user_gender,
        user_mob:item.user_mob,
        user_address:item.user_address,
        user_type:item.user_type,
        user_img:item.user_img
  
      });
    }
    onSaveClick(){
     const fd=new FormData();
      
      fd.append('user_name',this.userform.get('user_name').value);
     fd.append('user_password',this.userform.get('user_password').value);
       fd.append('user_email',this.userform.get('user_email').value);
       fd.append('user_age',this.userform.get('user_age').value);
       fd.append('user_gender',this.userform.get('user_gender').value);
       fd.append('user_mob',this.userform.get('user_mob').value);
       fd.append('user_address',this.userform.get('user_address').value);
       fd.append('user_type',this.userform.get('user_type').value);
       if (this.selectedfile != null) {
         fd.append('user_img',this.selectedfile,this.selectedfile.name);
       }
       else {
         fd.append('user_img', this.userform.get('user_img').value);
       }
       console.log(fd);
         this._ser.edituser(this.u_EmailId,fd).subscribe((data:any)=>{
         console.log(data);
        if(data.affectedRows==1)
         {
           //this.notValid = true;
           alert('data updated succesfully');
           this._router.navigate(['/dashbord']);
         }
         else{
           alert('something went wrong');
           console.log(data);
         }
         this.userform.reset({});
  
       });
  
    }
    cancle(){
      //this.notValid = true;
      this._router.navigate(['/dashbord']);
    }
  
    onChange(value){
      this.selectedfile=<File>value.target.files[0];
    }
}
