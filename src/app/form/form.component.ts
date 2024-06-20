import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cat } from '../../models/cat.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

email:string=" ";

 imageDetails:Cat = {
  src:"https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg",
  alt:"cat_image"
}
isOk:Boolean=false;
okFunc(e:any){
  console.log(e)
  let value=e.target.value.trim()
  this.isOk=value ? true : false
 

}
}
