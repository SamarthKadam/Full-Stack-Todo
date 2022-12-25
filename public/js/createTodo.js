export class App{
    constructor(Text)
    {
        this.TodoText=Text;
        this.prio=true;
    }
    _calctime(time)
    {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const months=["January","February","March","April","May","June","July","August","September","October",
        "November","December"];
        const data=time;
        const[month,day,date]=[data.getMonth(),data.getDay(),data.getDate()];
        this.timeStamp=`${weekday[day]},${months[month]} ${date}`;
    }

}
