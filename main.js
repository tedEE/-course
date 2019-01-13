

let money,
	izena,
	prise;

 startShop();


let mainList = {
	budzhet : money,
	name : izena,
	shopGoods : [],
	employers : {},
	open : false,
	discount : false
}

 // startShop(); объект уже инициализирован и свойства не добавяться



 function startShop() {
 	money = prompt('какой ваш бюджет?');
 	while (isNaN(money) || money =='' || money == null) {
 		money = prompt('какой ваш бюджет?');
 	}
 	izena = prompt('название вашей фирмы?').toUpperCase();
 }




function gehituProduct() {
	 for(let i = 0; i<3; i++){
		let a = prompt('Какой тип товаров будем продавать?');
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length<50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		}else{
			i = --i;
		}
	}
}

// gehituProduct();

console.log(mainList);

// let days = document.querySelectorAll('#week');
// let week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
// // console.log(days);

// for(let i = 0; i<week.length; i++){
// 	if ('суббота' == week[i] || 'воскресенье' == week[i]) {
// 		days[i].classList.add('weekends')
// 	}
// 	days[i].innerHTML = week[i];
// }

let num = [45,32,754,147,356,89,444];
for(let i = 0; i<num.length; i++){
	let str = num[i] + '';
	if('3' == str[0]){
		console.log(num[i]);
	}
}


	

// console.log(mainList.aurr / 30);

// alert( typeof(+"Infinity") ); 
// alert([ ] + false - null + true )

// let vari = 33721 + '';

// alert((vari[0] * vari[1] * vari[2] * vari[3] * vari[4])**3);