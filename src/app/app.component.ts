import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
}
