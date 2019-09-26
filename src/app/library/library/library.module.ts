import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartModule } from 'angular-highcharts';
import { AngularD3TreeLibModule } from 'angular-d3-tree';

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ChartModule,
    Ng2SearchPipeModule,
   AngularD3TreeLibModule
    
  ],
  exports: [
   FlexLayoutModule,
   HttpClientModule,
   ChartModule,
   Ng2SearchPipeModule,
   AngularD3TreeLibModule

  ]
})
export class LibraryModule { }
