import { Component } from '@angular/core';
import { UserIdService } from '../../services/loginservice';
import { RouterModule , Routes, Router,ActivatedRoute} from '@angular/router'; // for routing
import { RedblackDirective } from '../../directives/redblack.directive';


@Component({
  selector: 'app-restricted',
  templateUrl: 'restricted.html'
})
export class Yrestricted{
	userid;
	constructor(private route: ActivatedRoute, public router: Router,private useridservice: UserIdService){
		console.log("the page is being redirected");
	}
	
	ngOnInit() {
	const id= this.route.snapshot.params['id'];
	console.log(id);
  this.userid = this.useridservice.getUsers();
 
}

	NotRestricted(){
	 // this.router.navigate(['restricted']);
	 this.router.navigateByUrl('/header', { skipLocationChange: true });
	 
   }
}
  
