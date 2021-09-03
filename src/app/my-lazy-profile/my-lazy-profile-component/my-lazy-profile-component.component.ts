
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/logged.service';
import { LoginServiceService } from 'src/app/login-service.service';


@Component({
  selector: 'app-my-lazy-profile-component',
  templateUrl: './my-lazy-profile-component.component.html',
  styleUrls: ['./my-lazy-profile-component.component.css']
})
export class MyLazyProfileComponentComponent implements OnInit{
  public listaNote:any;
  public nota:string='';
  public logged: any;
  constructor(private loginService:LoginServiceService,public loggedService: LoggedService,private router: Router) { }

 

  ngOnInit(): void {
    console.log("MyLazyComponentComponent START");
    const dati = {
      id:this.loggedService.userId     
    };
  
    this.loginService.metodoGetSelectProfileMyService().
    subscribe(responseData =>{      
      this.listaNote=responseData
      console.log('Ottengo le note: ' + JSON.stringify(this.listaNote)); 

    } ,
    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );
    
   
  }

  

  verificaLogin():boolean{
      return this.loggedService.isLogged;
  }

  // Pulisce la cache per gli aggiornamenti delle chiamate HTTP
  cacheHeaders = new HttpHeaders()
  .set('Content', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
  .set('Pragma', 'no-cache')
  .set('Expires', '0');

  //'headers': this.cacheHeaders 

  aggiungiNota(){
    console.log("ID dell' utente  = "+this.loggedService.userId);
    const dati = {
      id_user:this.loggedService.userId,
      note: this.nota
    };
    let data = JSON.stringify(dati);
 
    console.log("JSON INVIATO  = "+data);
    this.loginService.metodoPutMyService(data).
    subscribe(
          response => {
        this.logged = response;       
        this.loginService.metodoGetSelectProfileMyService().
    subscribe(responseData =>{      
      this.listaNote=responseData
      console.log('Ottengo le note: ' + JSON.stringify(this.listaNote)); 
      
    } ,
    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );        
     },
    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );
  }




  eliminaNota(idNota:any){
   
    
    console.log(" INVIATO  = "+idNota);
    this.loginService.metodoDeleteMyService(idNota).
    subscribe(
          response => {
        this.logged = response;
        console.log('Eseguo la delete: ');  
        this.loginService.metodoGetSelectProfileMyService().
        subscribe(responseData =>{      
          this.listaNote=responseData  
        } ,
        error=>console.log("Errore "+JSON.stringify(error)),
        () => console.log('onComplete')
        );       
     },
    error=>console.log("Errore "+JSON.stringify(error)),
    () => console.log('onComplete')
    );
  }
 
}
