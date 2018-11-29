function week (day){
	if( day == 1 ){
        alert("Сьогодні Понеділок(") ;}

    else if(day ==2 ) {
         alert("Сьогодні Вівторок");}
   else if(day ==3 ) {
         alert("Сьогодні Середа"); }
	 else if(day ==4 ) {
         alert("Сьогодні Четвер");
	 }
	 else if( day==5 ) {
         alert("Сьогодні П'ятниця");
	 }
	 else if(day ==6 ) {
         alert("Сьогодні Субота");
	 }
	 else if(day ==7 ) {
         alert("Сьогодні Неділя");
	 }
    else  {
	alert("Неправильні вхідні данні , будь-ласка  введіть ()від 1 до 7");
}

	return day}
	alert("3 Завдання")
var day;
day=prompt("Введіть номер сьогоднішнього дня" +" (від 1 до 7)");
day=week(day);
