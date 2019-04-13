import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// import {Http, Response, Headers, RequestOptions } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

 public formdata;
 public customerdata;
  constructor(private http: HttpClientModule) { }
  stateCtrl: FormControl;

  ngOnInit() {
    this.formdata = new FormGroup({
      fname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      lname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(3)
      ])),
      Email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)
     ])),
      address:new FormControl(""),
      phoneno:new FormControl("")
   });
  }

  onClickSubmit(data) {
    document.getElementById("custtable").style.display="";
    this.customerdata = [];
    for (var prop in data) {
       this.customerdata.push(data[prop]);
    }
    console.log(this.customerdata);
 }
}
