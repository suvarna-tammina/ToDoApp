import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Router} from '@angular/router';

import {ServerApi} from '../../common-service/api-call-service';
import {ApiCallClass} from '../../common-service/api-call-model';
//import { window } from 'rxjs/operators/window';

declare var $: any;
@Component({
    selector: 'login-form-element',
    templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
    userdata = {
        username: "",
        password: ""
    };
constructor(private callloginApi: ServerApi,private apiModel :ApiCallClass,private router: Router ){
    
}
    ngOnInit() {
        
    }

    login(){
        this.apiModel.data=JSON.stringify(this.userdata);
         console.log("userdata---"+JSON.stringify(this.apiModel));
        this.callloginApi.callLogin(this.apiModel).subscribe(resp => {
            console.log("response---"+(resp));
            if(resp.Result.valid){
                window.sessionStorage.setItem('user','true');
                this.router.navigateByUrl("/list");   
            }else{
                window.sessionStorage.setItem('user','false');
                alert('Invalid Credentials');
            }
            
        })
        
      //  this.router.navigateByUrl("/list");
    }
}