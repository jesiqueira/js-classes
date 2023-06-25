export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days() {
    /*
    -----converter em dias----
    Pega se o tatal de milesegundo que falta divido pelo milesegundo de um dia
    24 por que o dia tem 24 horas
    60 em cada hora
    60 em cada minuto
    1000 que é o valor de 1 segundo, ou seja um segundo tem 1000 milesegundo


    */
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }

  get hours() {
    /*
    -----Total horas---
    60 minutos em cada hora
    60 segundo em cada minuto
    1000 que é o valor de  miliesegundo, ou seja um segundo tem 1000 milesegundo
    */
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  get minutes() {
    /*
    -----Total minutos---
    60 segundo em cada minuto
    1000 que é o valor de  miliesegundo, ou seja um segundo tem 1000 milesegundo
    */
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  get seconds() {
    /*
    -----Total segundo ---
    1000 que é o valor de  miliesegundo, ou seja um segundo tem 1000 milesegundo
    */
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total(){
    const days = this.days
    const hours = this.hours % 24
    const minutes = this.minutes % 60
    const seconds = this.seconds % 60
    return {
        days,
        hours,
        minutes,
        seconds
    }
  }
}
