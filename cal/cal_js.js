function makeCal(yr) {
  for(var x=1;x<=12;x++) {
    var calBody=document.createElement('div');
    var calHead=document.createElement('div');
    var nid="cal"+x;
    calBody.setAttribute('id',nid);
    calHead.setAttribute('id',"h"+nid);
    calBody.setAttribute('class',"simpleCal printable section");
    calHead.setAttribute('class',"simpleCalHead printable")
    var par=document.getElementById("bod");
    par.appendChild(calHead);
    par.appendChild(calBody);
    
    var res=getCal(x,yr);
    calHead.innerHTML=res[0];
    calBody.innerHTML=res[1];
  }
}

function getCal(m,yr) {
    var fDate=new Date(m+' 1 , '+yr);
    
    var cDate=fDate.getDate();
    var cMonth=fDate.getMonth();
    var cYear=fDate.getFullYear();
    var febDays=28;
    
    if (cMonth==1) { 
      //For february Check for leap year
      if( (cYear%4==0 && cYear%100!=0) || cYear%400==0)
        febDays=29;
    }
      
    var divCal="";
    
    var monthn = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    
    var dayn = ["Sun","Mon","Tues","Wed","Thru","Fri", "Sat"];
    
    var DaysInMonth = ["31", ""+febDays+"","31","30","31","30","31","31","30","31","30","31"];
    
    var fDate=new Date(cMonth+1+' 1 , '+cYear);
    var monthStarts=fDate.getDay();
    
    var calTable="\t<tr>\n";
    //Insert Day Names at the top
    var i=0;
    while(i<7) {
      calTable+="<td class='dayNames'>"+dayn[i]+"</td>"
      i++;      
    }
    calTable+="</tr><tr>"
    i=monthStarts;
    var wd=0;  
    //Insert blank spaces at the start of month
    while(i>0) {
      i--;
      wd++;
      calTable+="\t\t<td class='blankSpace'> </td>\n";
    }
    
    //Insert Dates now
    while(i<DaysInMonth[cMonth]) {
      i++;
      wd++;
      calTable+="\t\t<td class='tableDate'>"+i+" </td>\n";
      if(wd>6) {
        wd=0;
        calTable+="\t</tr>\n\t<tr>\n";
      }
    }
    
    var calBody="<table class='calendar'>";
    calBody+=calTable;
    calBody+="</table";

    divCal=monthn[cMonth]+" "+cYear;
    return [divCal,calBody];
  }