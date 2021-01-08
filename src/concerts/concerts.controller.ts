import { Controller, Post, Body, Get } from "@nestjs/common";
import { ConcertsService } from "./concerts.service";

@Controller("concerts")
export class ConcertsController {
constructor(private concertsService: ConcertsService) {}

    @Post()
    addConcert(
        @Body('title') conceTitle: string,
        @Body('description') concDesc: string,
        @Body('places') concPlaces: number,
        @Body('price') concPrice: number,
        @Body('date') concDate: Date,
    ) {
        const generatedId = this.concertsService.insertConcert(conceTitle, concDesc, concPlaces, concPrice, concDate);
    return {id: generatedId};
    }
    @Get()
    getAllConcerts(){
        return this.concertsService.getConcerts();
    }
}