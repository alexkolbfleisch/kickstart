import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getDefaultLibFilePath } from 'typescript';

@Component({
  selector: 'app-password', 
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  
  auth: string = ""; 
  response: any = {
    statusCode: 204,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "https://www.example.com",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    }
  }
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
   
    this.getAuth();
    console.log(this.auth);
}
getAuth() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin" : "*"};
  const pw = { pw:"MyAdmin2021" };

  //this.http.options<any>('https://44xocdu788.execute-api.eu-central-1.amazonaws.com/default/logIn-py);
  return this.http.post<any>('https://44xocdu788.execute-api.eu-central-1.amazonaws.com/default/logIn-py',(pw) ,httpOptions ).subscribe(data => {
      this.auth = JSON.stringify(data);
  });
}



}
