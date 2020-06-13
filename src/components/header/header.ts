import { Component } from '@angular/core';
import { RouterModule , Routes, Router} from '@angular/router'; // for routing

@Component({
  selector: 'app-restricted',
  templateUrl: 'header.html',
  styleUrls: ['header.css']
})
export class Header{
	
	constructor(public router: Router){
		console.log("the page is being redirected");
	}
	
}
