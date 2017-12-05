import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Router} from '@angular/router';

import {ServerApi} from '../../common-service/api-call-service';
import {ApiCallClass} from '../../common-service/api-call-model';
import { Observable } from 'rxjs/Observable';

declare var $: any;
@Component({
    selector: 'list-page',
    templateUrl: './user-list-page-layout.html',
})

export class ListComponent implements OnInit {
  users:any;
  loggedUser='';
  newUser={
    username:'',
      designation:''
  }
  oldUser={
    username:'',
      designation:''
  }
constructor(private callloginApi: ServerApi,private apiModel :ApiCallClass,private router: Router ){
    this.getUserList();
}
    ngOnInit() {
      this.loggedUser=window.sessionStorage.getItem('user');
    }

    signOut(){
        window.sessionStorage.clear();
        this.router.navigateByUrl("/login"); 
    }
    getUserList(){
        this.callloginApi.getAllUsers().subscribe(respSetting => {
            console.log("respSetting----------"+JSON.stringify(respSetting));
            this.users = (respSetting['data'])?JSON.parse(respSetting['data']):{};
        })       
    }
    deleteItem(id){
        this.callloginApi.deleteUser(id).subscribe(respSetting => {
            console.log("respSetting----------"+JSON.stringify(respSetting));
            this.users = (respSetting['data'])?JSON.parse(respSetting['data']):{};
        }) 
            
    }
    addItem(){

        this.apiModel.data=JSON.stringify(this.newUser);
            this.callloginApi.addUser(this.apiModel).subscribe(respSetting => {
                console.log("respSetting----------"+JSON.stringify(respSetting));
                this.users = (respSetting['data'])?JSON.parse(respSetting['data']):{};
                this.newUser={
                    username:'',
                      designation:''
                  }
            }) 
                
        
    }
    updateItem(){
        this.oldUser['edit']=false;
                this.apiModel.data=JSON.stringify(this.oldUser);
                    this.callloginApi.updateUser(this.apiModel).subscribe(respSetting => {
                        console.log("respSetting----------"+JSON.stringify(respSetting));
                        this.users = (respSetting['data'])?JSON.parse(respSetting['data']):{};
                    }) 
                        
                
            }
            activeEdit(user){
                this.oldUser=JSON.parse(JSON.stringify(user));
            }
            closeEdit(user){
                console.log(user);
            }
}