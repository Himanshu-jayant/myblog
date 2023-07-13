import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstName: string ="";
  password : string ="";

  constructor(private http:HttpClient,private router:Router)
  {

  }

  save()
  {
    let bodyData = {

      "firstName" : this.firstName,
      "password": this.password
    };
    this.http.post("http://localhost:8085/api/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("registered successfully")
    });
  }
  login()
  {
   this.router.navigateByUrl('/login');
  }


}
