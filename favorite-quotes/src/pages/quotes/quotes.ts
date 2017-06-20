import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams, private alert: AlertController, private  quotesService: QuotesService) {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote){
    const message = this.alert.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.quotesService.addQuoteToFavorites(selectedQuote);
            }
          },
          
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
              }
            }
        ]
      });

      message.present();
  }
}
