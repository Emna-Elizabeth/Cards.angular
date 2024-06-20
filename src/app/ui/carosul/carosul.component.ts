import { Component, Input, OnInit } from '@angular/core';
import {  CardComponent } from "../card/card.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-carosul',
    standalone: true,
    templateUrl: './carosul.component.html',
    styleUrl: './carosul.component.scss',
    imports: [ CardComponent,NgFor]
})
export class CarosulComponent implements OnInit {
    @Input() products: any[] = [];
 
  
    constructor() { }
  
    ngOnInit(): void { }
  }