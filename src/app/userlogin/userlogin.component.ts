import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

public formdata;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(10)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length > 8) {
       return {"passwd" : true};
    }
  
 }


 onClickSubmit(data) {
  console.log(data.uname);
  if (data.uname=="adminafnan" && data.passwd=="afnan123") {
     alert("Login Successful");
     this.router.navigate(['app-mainpage'])
  } else {
     alert("Invalid Login");
     return false;
  }
}
}
