import { Component } from '@angular/core';
import { Category } from './enums/category';
import { MenuItem } from './interface/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpusp Pizza';

  Category = Category;

  menuItems : MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: Category.Dinner,
      price: 11.99,
      icon: 'drumstick'
    },
    {
      name: 'Pizza',
      category: Category.Dinner,
      price: 7.99,
      icon: 'slice'
    },
    {
      name: 'Wings',
      category: Category.Lunch,
      price: 14.99,
      icon: 'wings'
    },
    {
      name: 'Breadsticks',
      category: Category.Sides,
      price: 4.99,
      icon: 'sides'
    },
    {
      name: 'Ceasar Salad',
      category: Category.Salads,
      price: 13.99,
      icon: 'salad'
    },
    {
      name: 'Cinnamon Roll',
      category: Category.Dessert,
      price: 2.99,
      icon: 'dessert'
    }
  ];
}
