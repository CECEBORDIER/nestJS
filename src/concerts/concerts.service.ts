import { Injectable } from "@nestjs/common";
import { Concerts } from './concerts.model';


@Injectable()

export class ConcertsService {

    concerts: Concerts[] = [];

    insertConcert(
        title: string,
        description: string,
        places: number,
        price: number,
        date: Date,
        ) {
        const concID = new Date().toString();
        const newConcert = new Concerts(concID, title, description, places, price, date);
        this.concerts.push(newConcert);
        return concID;
    }
}