function pow(x,n){var res=x; var i=1;
    do{res*=x; i++;}
while(i<n)


return res;}


function pow(x, n) {
if (n != 1) {
  return x * pow(x, n - 1);
} else {
  return x;
}
}



alert("5 Завдання (способом циклу)");
var x;
var n;
x=prompt("Введіть всій аргумент ");
n=prompt("Введіть степіль до якого потрібно піднести аргумент ");
if(n<=1){alert("Така степінь не підтримується введіть додатнє число");}
else{alert(pow(+x,+n));}


alert("5 Завдання (cпособом рекурсії)");
var y = prompt("Введіть аргумент:", '');
var m = prompt("Введіть степень:", '');
if(m<=1){alert("Така степінь не підтримується введіть додатнє число");}
else{
alert( pow(+y, +m) );
}
