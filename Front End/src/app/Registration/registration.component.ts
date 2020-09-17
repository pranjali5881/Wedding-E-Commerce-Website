import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User;
  constructor(private productServi :ProductServices,private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; lastname: string,email: string; password: string,address: string; })
  {

    console.log(postData);

    this.http
      .post(
        'http://localhost:3003/api/signup',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);

        this.router.navigate(['/login']);



        alert("user created");
      });

  }

}
