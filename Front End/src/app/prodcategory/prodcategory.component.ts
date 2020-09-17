import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../cart.service';
import { Cart } from '../cart.model';
import { ProductNew } from '../productNew.model';
import { Category } from '../category.model';

@Component({
  selector: 'app-prodcategory',
  templateUrl: './prodcategory.component.html',
  styleUrls: ['./prodcategory.component.css']
})
export class ProdcategoryComponent implements OnInit {
  id: number;
  products : any;
  category : Category[];
  mySubscription : any;
  @ViewChild('ingre_qty') ingre_qty : ElementRef;

  constructor(private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.mySubscription = this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd){
          this.router.navigated = false;
        }
      });
    }
    ngOnDestroy() { 
      if(this.mySubscription){
        this.mySubscription.unsubscribe();
      }
    }

  ngOnInit(): void {
    let id2 = this.route.snapshot.paramMap.get('id');

      

      this.http.get("http://localhost:3003/api/product/category/"+id2).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products =  posts;

       
       
      


     })
   
    ;
  }

}
