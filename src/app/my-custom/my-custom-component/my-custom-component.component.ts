import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-my-custom-component',
  templateUrl: './my-custom-component.component.html',
  styleUrls: ['./my-custom-component.component.css']
})
export class MyCustomComponentComponent implements OnInit {


  public password:number=0;
  public name:string='';
  logged: any;
  public users:any;

  constructor(private loginService:LoginServiceService,private loggedService: LoggedService) { }

  ngOnInit(): void {
  }
  
  inviaLoginForm(){
    const dati = {
      name:this.name,
      password: this.password
    };

    // console.log(JSON.stringify(dati));
    // Http fornisce metodi per effettuare richieste HTTP
    // restituisce un'Observable che apre un canale continuo di comunicazione

    let data = JSON.stringify(dati);

    this.loginService.metodoPostMyService(data).
    subscribe(
          response => {
        this.logged = response;
        console.log('Eseguo la Login: ' + JSON.stringify(this.logged)); 
        if (this.logged.log === 'Si' ){
          console.log('Login OK ');          
         this.loggedService.settaUtenteLogin(this.logged,this.logged.id);  

        }   
     },

    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );

  }

  
  verificaLogin():boolean{
    console.log("LoginCmponent isLogged ? "+this.loggedService.isLogged);
    this.logged=this.loggedService.leggiUtenteCollegato();
    return this.loggedService.isLogged;
}

 logOut():void{
  return this.loggedService.settaUtenteLogOut();
 }

}
