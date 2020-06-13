import { Component } from '@angular/core';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'product-search',
  templateUrl: 'productsearch.html',

})
export class ProductSearch{


  constructor(public router: Router, http: HttpClient){

  }


  ngOnInit() {
   //let obs=  this.http.get('https://api.github.com/users/koushikkothagal');
   //obs.subscribe((response) => console.log(response));




}



 }

