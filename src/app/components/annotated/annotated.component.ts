import { Component } from '@angular/core';

@Component({
  selector: 'app-annotated',
  templateUrl: './annotated.component.html',
  styleUrls: ['./annotated.component.css']
})
export class AnnotatedComponent {

  onClick (){
    let btn = document.getElementById("btnanno") as HTMLTextAreaElement;
    if (btn.innerHTML == "Start annotating"){
    let anno = document.getElementById("toBeAnnotated") as HTMLTextAreaElement;
    anno.disabled = true;
    btn.innerHTML="Edit Text"
    }
    else {
    btn.innerHTML ="Edit Text"
    let anno = document.getElementById("toBeAnnotated") as HTMLTextAreaElement;
    anno.disabled = false;
    btn.innerHTML="Start annotating"

    }
  }
}
