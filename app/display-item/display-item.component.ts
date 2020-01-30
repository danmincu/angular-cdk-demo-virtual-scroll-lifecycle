import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable, Subject, interval } from "rxjs";
import { throttle, delayWhen } from "rxjs/operators";

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit, OnChanges {

  @Input() state: any;

  comesIntoView = new Subject<any>()
  

  private _id: number;
  @Input() set id(i) {
    if (this._id != i) {

      console.log("setter for " + i + " was called ");

      if (this.subscription)
      {
        this.subscription.unsubscribe();
      }
      this.subscription = this.comesIntoView.pipe(delayWhen(val => interval(10000))).subscribe((i) =>
       console.log("Late notification " + i))

      this.comesIntoView.next(i);
    }
    this._id = i;
  }

  get id()
  {
    return this._id;
  }
  
  subscription;
  
  ngOnInit() {
    // PLEASE NOTE THIS IS CALLED ONLY COUPLE OF TIMES, CONTAINER REUTILIZATION IS INVOKED AFTER
    console.log("ngOnInit for " + this.id + " was called!");
  }

  ngOnDestroy() {
    // PLEASE NOTE THIS IS SELDOM CALLED ONLY WHEN GC IS DESTROYING A CONTAINER. IN GENERAL THEY ARE REUSED
    console.log("ngOnDestroy for " + this.id + " was called!");
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnChanges(changes) {
    // PLEASE NOTE THAT CONTAINERS ARE BEING REUSED AS OPOSED TO https://stackblitz.com/edit/angular-cdk-demo-ngx-virtual-scroll
    if (changes.id && !changes.id.firstChange && changes.id.previousValue > 0)
    {
      console.log("Reutilizing container:[" + changes.id.previousValue + "] for ["+ changes.id.currentValue +"]");
    }
  }

}