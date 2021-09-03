import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggedService {
  // Mock
  public isLogged = false;
  public isLoggedChild = true;
  public users:any;
  public userId:any;
  public assetsPath="https://ugobetori.it/_notes/api-test/angular/angular2/img/";
  constructor() { }


  // Metodi
  public settaUtenteLogin(utente:any,id:any) {  
    this.isLogged=true;
    this.isLoggedChild=true;  
    this.users=utente;  
    this.userId=id;
  }  

  
  // Metodi
  public settaUtenteLogOut() {    
    this.isLogged=false;
    this.isLoggedChild=false;    
  }  

  
  // Metodi
  public leggiUtenteCollegato() {    
    if(this.isLogged){
      return this.users;
    }
  }  

}