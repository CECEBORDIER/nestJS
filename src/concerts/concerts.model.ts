export class Concerts {

    constructor(public id: string,
        public title: string,
        public description: string,
        public places: number,
        public price: number,
        public date: Date,
        public image: HTMLImageElement,
    ) { };
}