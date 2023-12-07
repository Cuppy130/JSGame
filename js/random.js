export default class Random{
    //Mozilla docs for random()
    constructor(){return Math.random()};
    arbitrary(min, max){
        return Math.random() * (max - min) + min;
    };
    int(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };
    intInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min + 1);
    }
}