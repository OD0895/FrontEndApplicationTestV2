import { Component, OnInit } from '@angular/core';
import { ApplicationtestService } from 'src/app/services/applicationtest.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  resultado1 : string = '';
  resultado2 : string = '';

  anioInicio : string = '';
  anioFin : string = '';

  constructor(private applicationtestService : ApplicationtestService) { }

  ngOnInit(): void {
  }

  addEvent() {
    if(this.anioInicio && this.anioFin){
      let yearInit = this.anioInicio;
      let yearFin = this.anioFin;

      this.applicationtestService.getTest3({yearInit, yearFin}).subscribe(data => {  
        console.log(data)
        let salida1 = JSON.stringify(data['result']['salida1']);
        let salida2 = data['result']['salida2'];

          this.resultado1 =`Salida 1: ${salida1}`;
          this.resultado2 =`Salida 2: ${salida2} `;
      });
    }
  }

}
