
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/logged.service';
import { LoginServiceService } from 'src/app/login-service.service';


@Component({
  selector: 'app-my-lazy-component',
  templateUrl: './my-lazy-component.component.html',
  styleUrls: ['./my-lazy-component.component.css']
})
export class MyLazyComponentComponent implements OnInit{
  public users:any;
 
  constructor(private loginService:LoginServiceService,public loggedService: LoggedService,private router: Router) { }

  ngOnInit(): void {
    console.log("MyLazyComponentComponent START");
    this.loginService.metodoGetMyService().
    subscribe(responseData =>  this.users=responseData,
    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );
  }

  verificaLogin():boolean{
      return this.loggedService.isLogged;
  }

  navigateToUser(user:any){
    console.log("utente cliccato = "+user.name);
    this.router.navigate(['lazy/Dettaglio', {userSelected: JSON.stringify(user)}]);
  }
  

 

}
