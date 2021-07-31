import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-or-update-article',
  templateUrl: './create-or-update-article.component.html',
  styleUrls: ['./create-or-update-article.component.css']
})
export class CreateOrUpdateArticleComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});  //declaring our form variable
  article_category : any = [
    {value:"smartphone", description:"Smartphone"},
    {value:"tv", description:"TV"},
    {value:"pc", description:"PC"},
    {value:"other", description:"Other"}
]
  constructor() {}

ngOnInit() {
    this.signupForm = new FormGroup({
      article_id: new FormControl(null),//article_id
      article_name: new FormControl(null),//article_name
      article_price: new FormControl(null),//article_price
      article_category: new FormControl('smartphone'),//article_category
    });
  }

  onSubmit() {
  //  alert('test');
  console.log(this.signupForm.value);
    //console.log(this.signupForm.get('user_name').value);
    }

}
