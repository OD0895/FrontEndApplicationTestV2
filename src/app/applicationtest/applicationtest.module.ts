import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTestRoutingModule } from './applicationtest.routing.module';
import { MaterialModule } from '../material/material.module';
import { TestListComponent } from './test-list/test-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';

@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    TestListComponent
  ],
  imports: [
    CommonModule,
    ApplicationTestRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class ApplicationtestModule { }
