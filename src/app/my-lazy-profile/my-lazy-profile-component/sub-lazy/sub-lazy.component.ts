import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggedService } from 'src/app/logged.service';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-sub-lazy',
  templateUrl: './sub-lazy.component.html',
  styleUrls: ['./sub-lazy.component.css']
})
export class SubLazyComponent implements OnInit {
  public selectedUser:any;  
  public userId:any;
  constructor(private loginService:LoginServiceService,public loggedService: LoggedService,
    private myActRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("SubLazyComponent START");
    this.myActRoute.paramMap
    .subscribe(
      myParams => {       
        this.selectedUser =JSON.parse(myParams.get('userSelected')!) ;
         console.log("userSelected"+this.selectedUser.name);
      });   
  }

  verificaLogin():boolean{
      return this.loggedService.isLogged;
  }

 


}
