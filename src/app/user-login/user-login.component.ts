import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
   signupUsers: any[]=[];
   signupObj: any ={
    userName:'',
    email:'',
    password:''

   }

   loginObj:any={
    userName:'',
    password:''

   }
   constructor(){}

   ngOnInit(): void {

    const localData = localStorage.getItem('signUpUsers');
    if (localData != null){
      this.signupUsers= JSON.parse(localData)
    }
     
   }

   onSignUp(){
      this.signupUsers.push(this.signupObj)
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers))
      this.signupObj={
        userName:'',
        email:'',
        password:''
    
       }
      
   }

   onLogin(){
    const isUserExist = this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password)
    if (isUserExist!=undefined){
      alert('User Login Successfull')
    } else {
      alert('Invalid Credentials')
    }

   }
}

// import { Component, OnInit, Inject } from '@angular/core';
// import { PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.css']
// })
// export class UserLoginComponent implements OnInit {
//   signupUsers: any[] = [];
//   signupObj: any = {
//     userName: '',
//     email: '',
//     password: ''
//   };

//   loginObj: any = {
//     userName: '',
//     password: ''
//   };

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngOnInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       const localData = localStorage.getItem('signUpUsers');
//       if (localData != null) {
//         this.signupUsers = JSON.parse(localData);
//       }
//     } else {
//       console.warn('localStorage is not available in this environment');
//     }
//   }

//   onSignUp(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.signupUsers.push(this.signupObj);
//       localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
//       this.signupObj = {
//         userName: '',
//         email: '',
//         password: ''
//       };
//     } else {
//       console.warn('localStorage is not available in this environment');
//     }
//   }

//   onLogin(): void {
//     debugger
//     if (isPlatformBrowser(this.platformId)) {
//       const isUserExist = this.signupUsers.find(
//         m => m.userName == this.loginObj.userName && m.password == this.loginObj.password
//       );
//       if (isUserExist != undefined) {
//         alert('User Login Successful');
//       } else {
//         alert('Invalid Credentials');
//       }
//     } else {
//       console.warn('localStorage is not available in this environment');
//     }
//   }
// }
