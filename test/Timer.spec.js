import {expect} from 'chai';
import sinon from 'sinon';
import Timer from '../src/modules/Timer';

describe('App', () => {

    let clock;

    beforeEach(function () {
        clock = sinon.useFakeTimers();
    });

    afterEach(function () {
        clock.restore();
    });

    it('should assign default settings', function () {

        const timer = new Timer();

        expect(timer.updateInterval).to.equal(1000);
        expect(typeof timer.tickCallback).to.equal('function');
        expect(timer.tickCount).to.equal(1);
    });

    it('should tick!', function (done) {

        const timer = new Timer({
            tickCallback: function () {
                done();
            }
        });

        timer.start();
    });

    it('should tick 9 times, every 100ms', function (done) {

        let dummyTickCount = 0;

        const timer = new Timer({
            updateInterval: 10,//ms
            tickCount: 9,
            tickCallback: function () {
                if (dummyTickCount === 9) {
                    done();
                }
                dummyTickCount++;
            }
        });

        clock.tick(1);
        timer.start();
        clock.tick(1000);

    });

});
