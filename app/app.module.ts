import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DisplayItemComponent } from './display-item/display-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ScrollingModule],
  declarations: [ AppComponent, VirtualScrollComponent, DisplayItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
