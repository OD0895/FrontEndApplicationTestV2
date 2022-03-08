import { Component, OnInit } from '@angular/core';
import { ApplicationtestService } from 'src/app/services/applicationtest.service';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {

  resultado: string = '';
  data: string = '';

  constructor(private applicationtestService : ApplicationtestService) { }

  ngOnInit(): void {
  }
  
  addEvent() {
    this.applicationtestService.getTest5(this.data).subscribe(data => {  
      this.resultado = data['result'];
    });
  }

}
