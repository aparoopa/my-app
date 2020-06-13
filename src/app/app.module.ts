import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //for ng-model
import {HttpClientModule} from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router'; // for routing

import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { Yrestricted } from '../components/restricted/restricted';
import { Header } from '../components/header/header';
import { UserIdService } from '../services/loginservice';
import { RedblackDirective } from '../directives/redblack.directive';
import { AbcComponent } from './abc.component';

const appRoutes: Routes=[
		{path:'restricted/:id',component:Yrestricted},
		{path:'header',component:Header}
		//{path:'', redirectTo: '/login' ,pathMatch:'full'}
		
];

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	Yrestricted,
	Header,
	RedblackDirective,
	AbcComponent
	
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes,{ useHash: false })
  ],
  providers: [UserIdService],
  bootstrap: [LoginComponent]
})
export class AppModule{}