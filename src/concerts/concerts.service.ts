import { Injectable } from "@nestjs/common";
import { Concerts } from './concerts.model';


@Injectable()

export class ConcertsService {
    concerts: Concerts[] = [];
    insertConcert(id: string,
        title: string,
        description: string,
        places: number,
        price: number,
        date: Date,
        image: HTMLImageElement){
            const newConcert = new Concerts(new Date().toString(), title, description, places, price, date, image);
        this.concerts.push(newConcert);
        }
}