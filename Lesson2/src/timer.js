import {Duration} from "luxon";
import {Howl} from 'howler';

import tick from "./media/tik-tak.mp3"
import alarm from "./media/alarm.mp3"



const soundTick = new Howl({
    src: tick,
    html5: true,
    volume: 0.3,
    loop:true
});
const alarmSound = new Howl({
    src: alarm,
    html5: true,
    volume: 0.3,
});


export class Timer {
    #timer
    #interval
    #countdown

    start(time) {
        if (time === "00:00:00") return
        this.reset()
        this.#countdown = Duration.fromISOTime(time)
        this.#timer = setTimeout(this.#onTime.bind(this), this.#countdown.toMillis())
        this.#interval = setInterval(this.#tick.bind(this), 1000)
        soundTick.play()
        this.onStart()
    }

    reset() {
        soundTick.stop()
        this.#countdown = null
        clearTimeout(this.#timer)
        clearInterval(this.#interval)
    }

    getTimeLeft() {
        return this.#countdown.toFormat("hh:mm:ss")
    }

    #tick() {
        this.#countdown = this.#countdown.minus({seconds: 1})
        this.onTick()
    }

    #onTime() {
        alarmSound.play()
        this.reset()
        this.onTime()
    }

    onTime() {
    }

    onStart() {
    }

    onTick() {
    }
}