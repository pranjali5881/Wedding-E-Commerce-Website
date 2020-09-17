import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import {OrderServices} from '../order.service';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';
import { NewOrderServices } from '../neworder.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:HttpClient,private orderSer: OrderServices, private newOrde:NewOrderServices , private router: Router) { }
  order : any;
  ngOnInit(): void {
    let id2 = this.route.snapshot.paramMap.get('id');

    // this.http.get("http://localhost:3000/api/order/user/"+id2).subscribe(posts =>{
    //     console.log("array"+posts);
  
    //    this.order =  posts;
    
    //    })


       this.http.get<{[key:string]:Order}>("http://localhost:3003/api/order/user/"+id2)
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }
        console.log(responseData);
        return postArray;

           
    })).subscribe(posts =>{
        //console.log("array"+posts);
  
       this.order = posts;
       console.log(this.order);
     })
  }

}
