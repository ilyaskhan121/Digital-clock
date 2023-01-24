function updateClock(){
    let now= new Date()
    let dname=now.getDay(),
    mo= now.getMonth(),
    dnum= now.getDate(),
    yr= now.getFullYear(),
    hou= now.getHours(),
    min= now.getMinutes(),
    sec= now.getSeconds(),
    pe = "AM";
    if(hou==0){
        hou=12
    }
    if(hou>12){
        hou=hou-12;
        pe ="PM";
    }
    let months =["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let ids=["dayname","month","daynum","year","hour","minutes","seconds","period"]
    let values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe]
    for(let i =0;i<ids.length;i++){
        document.getElementById(ids[i]).innerHTML=values[i];
    }
}
function initclock(){
    updateClock();
    Window.setInterval("updateClock()",1);
}