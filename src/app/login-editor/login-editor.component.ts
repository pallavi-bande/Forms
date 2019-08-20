import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  styleUrls: ['./login-editor.component.css']
})
export class LoginEditorComponent implements OnInit {
  // using instances for creating form groups  and form controls 
LoginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
    

  })
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
submit(){
  console.warn(this.LoginForm.value);

}
}
