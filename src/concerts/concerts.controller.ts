import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ConcertsService } from "./concerts.service";

@Controller("concerts")
export class ConcertsController {
    constructor(private concertsService: ConcertsService) { }

    @Post()
    addConcert(
        @Body('title') conceTitle: string,
        @Body('description') concDesc: string,
        @Body('places') concPlaces: number,
        @Body('price') concPrice: number,
        @Body('date') concDate: Date,
    ) {
        const generatedId = this.concertsService.insertConcert(conceTitle, concDesc, concPlaces, concPrice, concDate);
        return { id: generatedId };
    }
    @Get()
    getAllConcerts() {
        return this.concertsService.getConcerts();
    }
    @Get(':id')
    getConcert(@Param('id') concID: string,) {
        return this.concertsService.getSingleConcert(concID);
    }
    @Patch(':id')
    updateConcert(
        @Param('id') concID: string,
        @Body('title') conceTitle: string,
        @Body('description') concDesc: string,
        @Body('places') concPlaces: number,
        @Body('price') concPrice: number,
        @Body('date') concDate: Date,
    ) {
        this.concertsService.UpdateConcert(concID, conceTitle, concDesc, concPlaces, concPrice, concDate)
        return null;
    }
    @Delete(':id')
    removeConcert(@Param('id') concID: string) {
        this.concertsService.removeConcert(concID);
        return null;

    }



}