import { Component } from '@angular/core';
import { UserIdService } from '../../services/loginservice';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing



@Component({
  selector: 'my-login',
  templateUrl: '/login.component.html',
   styleUrls: ['/login.component.css']
})
export class LoginComponent {
 userlist: any;
public errorMsg;
id:number;
num:any;

  constructor( public router: Router, public useridservice: UserIdService){
  
  }
 
  ngOnInit() {
  this.num="Ram";
   this.useridservice.getUsers()
                     .subscribe((userData) => this.userlist = userData,
                       error => this.errorMsg = error);
                       console.log(this.userlist);



}


 Proceed(userId){
  console.log("page is being redirected");
     this.router.navigate(['restricted', userId]);
  // this.router.navigate(['restricted', { queryParams: { p1: this.userlist.id} }]);
  //  this.router.navigateByUrl('/restricted');
   console.log("page is being redirected");
}
 }

