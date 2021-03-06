import { Component, OnInit } from '@angular/core';
import { LoginData } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginData: LoginData[] = [
    { id: '123', password: '123'},
    { id: 'admin', password: '123' }
  ];
  loginGetData: LoginData[];
  message: string;

  ngOnInit() {
  }

  login(userid: string, userpw: string) {
    this.loginGetData = this.loginData.filter(logindata => {
      return (userid === logindata.id && userpw === logindata.password);
    });
    (this.loginGetData.length) ? this.message = '로그인에 성공하였습니다.' : this.message = '아이디/비밀번호가 잘못되었습니다.';
  }

}
