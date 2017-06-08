import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit{
    animal: string;
    constructor(private nav: NavController, private params: NavParams) {

    }

     ngOnInit(): void {
        this.animal = this.params.get('animoid');
    }

    onGoHome(){
        this.nav.popToRoot();
    }

}