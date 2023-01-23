import { AfterViewInit, Component , ElementRef, ViewChild } from '@angular/core';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';
import { HttpClient } from '@angular/common/http';
//import { ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver';


export   interface Script {
  start: number,
  end: number,
  label: string,
  text?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild("annotateText") ngxAnnotateText?: NgxAnnotateTextComponent;

  constructor(private http: HttpClient) { }


  buttonName: string='';
  buttonColor: string='';
  buttons: { name: string; color: string; }[] = [];
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
  text =
    "";

  annotations: Annotation[] = [];

  addAnnotation(label: string, color: string): void {
    if (!this.ngxAnnotateText) {
      return;
    }

    const selection = this.ngxAnnotateText.getCurrentTextSelection();
    if (!selection) {
      return;
    }

    if (this.ngxAnnotateText.isOverlappingWithExistingAnnotations(selection)) {
      alert("The selected text is already annotated.");
      return;
    }

    this.annotations = this.annotations.concat(
      new Annotation(selection.startIndex, selection.endIndex, label, color)
    );
  }


generateJSON(){
  
  
  
let script_list: Script[] = [];

for (let i = 0; i < this.annotations.length; i++) {
  let start = this.annotations[i].startIndex;
  let end = this.annotations[i].endIndex;
  let label = this.annotations[i].label;
  let text = this.annotations[i].text;

  script_list.push({
      start: start,
      end: end,
      label: label,
      text: text
  });
} 
let JSON_Output = {
  "document" : this.text   ,
  "annotation" : script_list
}

console.log(script_list);
console.log(this.text);
console.log(JSON_Output);
this.downloadFile(JSON_Output);
}

downloadFile(variable: { document: string; annotation: Script[]; }) {
  const body = { 'variable' : JSON.stringify( variable )};
  console.log(body);
  this.http.post('http://127.0.0.1:8000/download/', body, { responseType: 'blob' }).subscribe(
      (response) => {
          saveAs(response, 'file.txt');
      },
      (error) => {
          console.log(error);
      }
  );
}




}
