import { Component } from '@angular/core';

// importando modelo de Poduct
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Andres';
  age = 24;
  img =
    'https://images.freeimages.com/images/large-previews/f98/black-coffee-1185883.jpg';
  btnDisable = true;

  persona = {
    name: 'Andres',
    age: 24,
    avatar:
      'https://images.freeimages.com/images/large-previews/f98/black-coffee-1185883.jpg',
  };

  // names: string[]  | number[] | any[]
  names: string[] = ['Andres', 'Moises', 'Isaac', 'Gloria'];
  newName: string = '';
  productos: Product[] = [
    {
      name: 'producto 1',
      price: 10000,
      image: './assets/images/p1.jpg',
      category: 'Varios',
    },
    {
      name: 'producto 2',
      price: 20000,
      image: './assets/images/p2.jpg',
    },
    {
      name: 'producto 3',
      price: 30000,
      image: './assets/images/p3.jpg',
    },
    {
      name: 'producto 4',
      price: 40000,
      image: './assets/images/p4.jpg',
    },
    {
      name: 'producto 5',
      price: 50000,
      image: './assets/images/p5.jpg',
    },
    {
      name: 'producto 6',
      price: 60000,
      image: './assets/images/p6.png',
    },
    {
      name: 'producto 7',
      price: 70000,
      image: './assets/images/p7.jpg',
    },
  ];

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.persona.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.persona.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  eliminarNombre(index: number) {
    this.names.splice(index, 1);
  }
}
