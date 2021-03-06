import { Quote } from '../data/quote.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex( (quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice(); //returns a copy of the array rather than a reference to the arry to avoid people modifying the array from the outside world
    }
}