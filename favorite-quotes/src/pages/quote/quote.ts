import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(private viewControl: ViewController) {
  }

  onClose(){
    this.viewControl.dismiss();
  }

}
