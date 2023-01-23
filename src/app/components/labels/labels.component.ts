import { Component } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent {
  buttonName: string='';
  buttonColor: string='';
  buttons: { name: string; color: string; }[] = [];
  constructor() {
  }
  addButton() {
    if (this.buttonName.trim() !== '') {
      let randomColor = this.getRandomColor();
      this.buttons.push({ name: this.buttonName, color: randomColor });
      this.buttonName = '';
    }
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
}
