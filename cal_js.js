function getCal() {
    var fDate=new Date();
    
    var cDate=fDate.getDate();
    var cMonth=fDate.getMonth();
    var cYear=fDate.getFullYear();
    var febDays=28;
    
    if (cMonth==1) { //For february Check leap yr
      if( (cYear%4==0 && cYear%100!=0) || cYear%400==0)
        febDays=29;
    }
      
    var divCal=document.getElementById("cal");
    divCal.innerHTML=cDate+"/"+cMonth+" "+febDays;
    
    var divDeb=document.getElementById("deb");
    
    var monthn = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    
    var dayn = ["Sun","Mon","Tues","Wed","Thru","Fri", "Sat"];
    
    var DaysInMonth = ["31", ""+febDays+"","31","30","31","30","31","31","30","31","30","31"];
    
    var fDate=new Date(cMonth+1+' 1 , '+cYear);
    var monthStarts=fDate.getDay();
    divCal.innerHTML=dayn[monthStarts];
    
    var calTable="\t<tr>\n";
    //Insert Day Name at the top
    var i=0;
    while(i<7) {
      calTable+="<td>"+dayn[i]+"</td>"
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
  
    divDeb.innerHTML=DaysInMonth[cMonth]+" "+i;
    
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
      
    divCal.innerHTML=calBody;
  }