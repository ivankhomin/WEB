function m(data,month,number){
	return((data+month)/number)

}
alert("2 Завдання")
var data,month;
data=prompt("Введіть дату вашого народження");
month=prompt("Введіть місяць вашого  народження");
number=prompt("Введіть номер вашого варіанту")
alert("Тестування функції : "  +m(+data,+month,+number));
