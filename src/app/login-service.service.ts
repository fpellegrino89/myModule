import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedService } from './logged.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService  implements CanLoad{
   users:any;
  logged: any;
  // Proprietà
  public proprietaMyService = 'Proprietà MyService';
  // Costruttore
  constructor(private  http:HttpClient, private loggedService: LoggedService,
    private router: Router) {
    console.log('Costruttore MyService');
  }

  // Pulisce la cache per gli aggiornamenti delle chiamate HTTP
  cacheHeaders = new HttpHeaders()
  .set('Content', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
  .set('Pragma', 'no-cache')
  .set('Expires', '0');


  canLoad(){
    {     
      if (this.loggedService.isLogged) {
        console.log("Hai il permesso di visitare questa pagina.");
        return true;
      } else {
        alert('Non hai il permesso di visitare questa pagina!');
        this.navigateTo();
        return false;
      }
    }
  }

  
    // Naviga alla pagina
    navigateTo() {
      this.router.navigate(['home']);
    }



  // Metodi
  public metodoMyService(stringa?: string) {
    console.log('Metodo MyService' + stringa);
  }  

   // Metodi
   public metodoPostMyService(data:any):Observable<any>{
      console.log('Metodo metodoPostMyService');
     return  this.http.post('https://ugobetori.it/_notes/api-test/angular/angular2/login.php', data);    
  }  

  // Metodi
  public metodoGetMyService():Observable<any>{
    console.log('Metodo metodoGetMyService');
    return this.http.get('https://ugobetori.it/_notes/api-test/angular/angular2/select_users.php');    
  }
 // Metodi
 public metodoGetSelectProfileMyService():Observable<any>{
  console.log('Metodo metodoGetSelectProfileMyService');
  return this.http.get('https://ugobetori.it/_notes/api-test/angular/angular2/select_profile.php?id='+this.loggedService.userId,{ 'headers': this.cacheHeaders });    
}
  

  
  // Metodi
  public metodoGetMyServiceSingleUser(id:any):any{
    console.log('Metodo metodoGetMyServiceSingleUser');   
    if (id){
      this.metodoGetMyService().
      subscribe(responseData =>  this.users=responseData,
      error=>console.log("Errore "+JSON.stringify(error)),
      () => console.log('onComplete ')
      );      
     if(this.users){
      for (let utente of Object.keys( this.users)) {
        var utenteSelezionato =  this.users[utente];         
        if(utenteSelezionato.name==id){
          console.log('Utente trovato oook'+utenteSelezionato.name); 
          return utenteSelezionato;
         
        }
         
       }
     }

    }     
  }


   // Metodi
   public metodoPutMyService(data:any):Observable<any>{
    console.log('Metodo metodoPutMyService');
   return  this.http.put(' https://ugobetori.it/_notes/api-test/angular/angular2/manage_profile.php', data);    
}  


  // Metodi
  public metodoDeleteMyService(idNota:any):Observable<any>{
    console.log('Metodo metodoPutMyService '+idNota);
   return  this.http.delete('https://ugobetori.it/_notes/api-test/angular/angular2/manage_profile.php',{ body: { id_note: idNota} });    
}  


}


