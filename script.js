let userinput = document.getElementById("date")
userinput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");
function calclualteage(){
    let bithdate = new Date(userinput.value)
    let d1 =bithdate.getDate();
    let m1 = bithdate.getMonth();
    let y1 = bithdate.getFullYear();

    let today = new Date();
     let d2 =today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3= y2-y1;
    if( m2>=m1)
    {
        m3=m2-m1;
       

    }else{
        y3--;
        m3=12 + m2-m1;

    }

    if(d2>=d1)
    {
        d3=d2-d1;
    }else{
m3--;
d3 = getfulldate(y1,m1)+ d2 - d1
    }
    if(m3<0){
        m3=11;
        y3--;
    }

    result.innerHTML=`You are ${y3} year, ${m3} Months and ${d3} days old`

}

function getfulldate(year,month){
    return  new Date(year,month,0).getDate();

}