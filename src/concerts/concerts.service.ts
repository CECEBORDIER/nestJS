import { Injectable, NotFoundException } from "@nestjs/common";
import { Concerts } from './concerts.model';


@Injectable()

export class ConcertsService {

    private concerts: Concerts[] = [];

    insertConcert(
        title: string,
        description: string,
        places: number,
        price: number,
        date: Date,
    ) {
        const concID = Math.random().toString();
        const newConcert = new Concerts(concID, title, description, places, price, date);
        this.concerts.push(newConcert);
        return concID;
    }


    getConcerts() {
        return [...this.concerts];
    }


    getSingleConcert(concertId: string) {
        const concert = this.findConcert(concertId)[0];

        return { ...concert };
    }


    UpdateConcert(
        concertId: string,
        title: string,
        description: string,
        places: number,
        price: number,
        date: Date,) {

        const [concert, index] = this.findConcert(concertId);
        const updatedConcert = { ...concert };
        if (title) {
            updatedConcert.title = title;
        } if (description) {
            updatedConcert.description = description;
        } if (places) {
            updatedConcert.places = places;
        } if (price) {
            updatedConcert.price = price;
        } if (date) {
            updatedConcert.date = date;
        }
        this.concerts[index] = updatedConcert;

    }

    private findConcert(id: string): [Concerts, number] {
        const concertIndex = this.concerts.findIndex(conce => conce.id == id);
        const concert = this.concerts[concertIndex];
        if (!concert) {
            throw new NotFoundException('Could not find this concert. ');
        }
        return [concert, concertIndex];
    }

    removeConcert(id: string) {
        const index = this.findConcert(id)[1];
        this.concerts.splice(index, 1)
      
    }
}
