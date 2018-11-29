alert("4 Завдання");

var week2;
t=prompt("Введіть номер сьогоднішнього дня знову");
    if( t == 1 )
week2= function(){
alert("Сьогодні Понеділок");}
    else if(t ==2 )
		week2= function(){
		alert("Сьогодні Вівторок"); }
   else if(t ==3 )
	   week2= function(){
	   alert("Сьогодні Середа"); }
	 else if(t ==4 )
      week2= function(){
      alert("Сьогодні Четвер");}
	 else if(t ==5 )
     week2= function(){
       alert("Сьогодні П'ятниця"); }
	 else if(t ==6 )
		 week2= function(){
         alert("Сьогодні Субота");}
	 else if(t ==7 )
		 week2= function(){
	alert("Сьогодні Неділя");}
    else
		week2= function(){
       alert("Неправильні вхідні данні , будь-ласка  введіть (від 1 до 7)");
		}
week2();
