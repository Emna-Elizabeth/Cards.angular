import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DiningComponent } from './dining/dining.component';
import { WorkAreaComponent } from './work-area/work-area.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PassComponent } from "./pass/pass.component";
import { ButtonComponent } from "./ui/button/button.component";
import { CardComponent } from "./ui/card/card.component";
import { CarosulComponent } from "./ui/carosul/carosul.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CardComponent, CarosulComponent,NgFor]
})

export class AppComponent {
  title = 'Emna';
  name:string='emna';
  isAdmin:boolean=false;


  // productName: any= [];

  // async getData(): Promise<void> {
  //   try {
  //     const response = await fetch('https://dummyjson.com/products');
  //     const products = await response.json();
  //     this.productName = products.products;
  //     console.log(this.productName);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // ngOnInit(): void {
  //   this.getData();
  // }
 



 
    productName: any[] = [];
    categorizedProducts: { [key: string]: any[] } = {};
    categories: string[] = ['fragrances', 'furniture', 'groceries', 'beauty']; 
  
    constructor() {}
  
    ngOnInit(): void {
      this.getData();
    }
  
    async getData(): Promise<void> {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        this.productName = data.products;
        this.categorizeProducts();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    categorizeProducts(): void {
      this.categories.forEach(category => {
        this.categorizedProducts[category] = this.productName.filter(product => product.category === category);
      });
    }
  }





  // export class AppComponent {
  //   title = 'Emna';
  //   name: string = 'emna';
  //   isAdmin: boolean = false;
    
  //   productName: any[] = [];
  //   categorizedProducts: { [key: string]: any[] } = {};
  //   categories: string[] = ['fragrances', 'furniture', 'groceries', 'beauty']; 
    
  //   constructor() {}
    
  //   ngOnInit(): void {
  //     this.getData();
  //   }
    
  //   async getData(): Promise<void> {
  //     try {
  //       const response = await fetch('https://dummyjson.com/products');
  //       const data = await response.json();
  //       this.productName = data.products;
  //       this.categorizeProducts();
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
    
  //   categorizeProducts(): void {
  //     this.categories.forEach(category => {
  //       this.categorizedProducts[category] = this.productName.filter(product => product.category === category);
  //     });
  //   }
    
  //   trackByCategory(index: number, category: string): string {
  //     return category;
  //   }
  // }