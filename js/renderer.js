export default class PerFrame {
    constructor(callback = Function(), framesPerSecond = 60){
        setInterval(callback, 1000/framesPerSecond);
    }
}