export default class {

    constructor(options = {}){
        this.updateInterval = options.updateInterval || 1000;
        this.tickCallback = options.tickCallback || function () {};
        this.tickCount = options.tickCount || 1;
        this.stop();
    }

    start(){

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
        if (this.tickCount === 0){
            clearInterval(this.interval);
        }else{
            this.tickCount--;
        }

        this.tickCallback();

        return this;
    }

}
