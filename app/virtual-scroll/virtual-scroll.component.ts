import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { STATES, FIXED_SIZE } from '../data/states';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent {
  
  states$ = Observable.create(observer => {
      observer.next(STATES);
      observer.complete();
  })
}