import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../userservice.service';
import { Users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Observable<Users[]> | null = null;

  model: any = {}
  getData!: Partial<Users>;

  constructor(private userservice: UserserviceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginUser() {
    let email = this.model.email;
    let password = this.model.password;
    console.log(this.model);

    this.userservice.getUserData(email, password).subscribe((res: Partial<Users>)=>{

      this.getData = res; console.log("flag "+this.getData)

      if(this.getData != 0) {
        this.router.navigate(["/home"]);
      }
    })

  }

}
