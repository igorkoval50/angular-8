import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
