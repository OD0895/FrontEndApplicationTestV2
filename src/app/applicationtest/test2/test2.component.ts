import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApplicationtestService } from 'src/app/services/applicationtest.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  resultado : string = '';

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private applicationtestService : ApplicationtestService) { }

  ngOnInit(): void {
  }

  addEvent() {
    if(this.range.value){
      let dateInit = moment(this.range.value.start).format('YYYY-MM-DD');
      let dateFin = moment(this.range.value.end).format('YYYY-MM-DD');
      this.applicationtestService.getTest2({dateInit, dateFin}).subscribe(data => {  
          this.resultado =`En el rango de fechas existen ${data['result']} Domingos que son ultimo dia del mes.`;
      });
    }
  }
}
