//Date Object
//https://gist.github.com/jacobbubu/1836273
new  Date();

var BelgiumTime = new Date();

console.log(BelgiumTime.getFullYear());
console.log(BelgiumTime.getMonth());
console.log(BelgiumTime.toLocaleString('nl-BE', {timeZone: 'GMT'}));
//console.log(BelgiumTime.toLocaleString('nl-BE', {timeZone: 'GMT'}));
console.log(BelgiumTime.toLocaleString('en-US', {timeZone: 'GMT'}));
console.log(BelgiumTime.toLocaleString('es-ES'));

var getHour = BelgiumTime.getHours();
var getMin = BelgiumTime.getMinutes();
var getSec = BelgiumTime.getSeconds();

var myTime = getHour + ":" + getMin + ":" + getSec;
var MyDays = ["Maandag", "Dinsdag","Woensdag","Donderdag", "Vrijdag","Zaterdag","Zondag"];
console.log(MyDays[BelgiumTime.getDay()]);

console.log(myTime);
console.log(BelgiumTime.setFullYear(2015,01,01));
var UnixTimesStampFormat = 1422780883550;
var time = new Date(UnixTimesStampFormat * 1000);
console.log(time.getHours());
console.log(time.getMinutes());
//https://www.epochconverter.com/
console.log(new Date(UnixTimesStampFormat).toLocaleString('nl-be'));

var misDias = ["Lunes", "Martes","Miercoles","Jueves", "Viernes","Sabado"];
console.log(misDias[BelgiumTime.getDay()]);
console.log("My time is: "+ BelgiumTime.getDay())