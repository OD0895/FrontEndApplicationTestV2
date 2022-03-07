import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTestRoutingModule } from './applicationtest.routing.module';
import { MaterialModule } from '../material/material.module';
import { TestListComponent } from './test-list/test-list.component';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';

@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    TestListComponent
  ],
  imports: [
    CommonModule,
    ApplicationTestRoutingModule,
    MaterialModule
  ]
})
export class ApplicationtestModule { }
