function summa(){ 
  var n1=parseInt(document.sum.n1.value); 
  var n2=parseInt(document.sum.n2.value);  
  var n3=parseInt(document.sum.n3.value); 
  var n4=parseInt(document.sum.n4.value);
document.sum.res.value=n4-(n1*4560.20+n2*520.40+n3*6320.70); 
if(document.sum.res.value>0) {
	var NiceS = document.getElementById("s");
	NiceS.innerHTML = "Сдача: ";
};
if(document.sum.res.value<0) {

	document.all.s.innerHTML = "Должен: ";
};
}

function rec(){ 
  var n1=parseInt(document.rect.n1.value); 
  var n2=parseInt(document.rect.n2.value);  
  var p = n1+n2;
  var s = n1*n2;
  var d = Math.hypot(n1, n2); 
	document.all.s1.innerHTML = "Периметр: "+p+"<br> Площадь: "+s+"<br> Диаметр: "+d;

}

var date = new Date();
if(date.getHours()>=7 & date.getHours()<=12) document.write("<h1>Доброе утро</h1><br>");
if(date.getHours()>=12 & date.getHours()<=17) document.write("<h1>Добрый день</h1><br>");
if(date.getHours()>=17 & date.getHours()<=0) document.write("<h1>Добрый вечер</h1><br>");
if(date.getHours()>=0 & date.getHours()<=7) document.write("<h1>Доброй ночи</h1><br>");
document.write("Год - " + date.getFullYear() + "<br />");
document.write("Месяц - " + (date.getMonth()+1) + "<br />");
document.write("Число - " + date.getDate() + "<br />");
document.write("День недели - " + date.getDay() + "<br />");
document.write("Час - " + date.getHours() + "<br />");
document.write("Минута - " + date.getMinutes() + "<br />");
document.write("Секунда - " + date.getSeconds() + "<br />");
document.write("Миллисекунда - " + date.getMilliseconds() + "<br />");
document.write("Количество миллисекунд прошедших с 01.01.1970 - " + date.getTime() + "<br />");

var msg = "йух                   ";
var id;
function scrollMsg(){
document.scrollerForm.welcomeMsg.value=msg;
msg=msg.substring(1,msg.length)+msg.substring(0,1);
id=setTimeout("scrollMsg()", 150);
}
function stopMsg(){
clearTimeout(id);
}


$(document).ready(function () {
$("#pica").click(function () {$("#pica").hide("slow");});


});


