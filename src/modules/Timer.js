export default class {

    constructor(options = {}){
        this.updateInterval = options.updateInterval || 1000;
        this.tickCallback = options.tickCallback || function () {};

        this.stop();
    }

    tickFor(tickCount = 0){
        this.tickCount = tickCount;
        this.currentTick = 0;

        if (this.interval)
            this.stop();

        this.interval = setInterval(this.update.bind(this), this.updateInterval);
        this.update();

        return this;
    }

    stop(){
        if (!this.interval)
            return this;

        clearInterval(this.interval);
        this.interval = 0;

        return this;
    }

    update(){
        this.tickCallback(this.currentTick);

        if (this.currentTick === this.tickCount){
            clearInterval(this.interval);
        }else{
            this.currentTick++;
        }

        return this;
    }

}
