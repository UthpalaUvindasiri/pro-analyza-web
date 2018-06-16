import{Component, OnInit}from '@angular/core';

@Component({
  selector: 'app-code-analysis',
  templateUrl: './code-analysis.component.html',
  styleUrls: ['./code-analysis.component.css']
})
export class CodeAnalysisComponent implements OnInit {

  selected: any[] = new Array("");

  constructor() { }

  ngOnInit() {
  }

  public populate(){
      var e: any = document.getElementById("stds");
      var select: string = e.options[e.selectedIndex].text;

      if(this.selected.includes(select)){
        this.selected.splice(this.selected.indexOf(select,0),1);
      }
      else{
        this.selected.push(select);
      }
  }

}
