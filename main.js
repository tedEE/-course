let money,
	izena,
	prise,
	time;

 // startShop();



let mainList = {
	budzhet : money,
	name : izena,
	shopGoods : [],
	employers : {},
	open : false,
	discount : true,
	shopItems : [],
	gehituProduct : function gehituProduct(){
			for(let i = 0; i<3; i++){
			let a = prompt('Какой тип товаров будем продавать?', '');
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length<50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			}else{
				i = --i;
			}
		}
	},
	workTime : function workTime(time) {
			if (time<0) {
				console.log("Такого не может быть");
			}else if (time > 8 && time < 20) {
				console.log('Время работать');
				mainList.open = true;
			}else if (time < 24) {
				console.log('Уже слишком поздно');
			}else{
				console.log('в сутках только 24 часа');
				}
	},
	calculateBudget : function calculateBudget(callback) {
			alert("Ежедневный бюджет" + mainList.budzhet / 30 );
			prise = mainList.budzhet / 30;
			callback();
	},
	calculateDiscount : function calculateDiscount() {
			if (true == mainList.discount) {
				prise = prise / 100 * 80;
		}
	},
	addEmployers : function addEmployers() {
			for(let i = 1; i<=4; i++){
				let name = prompt('Напишите имя сотрудника', '');
				mainList.employers[i] = name;
		}
	},
	chooseShopItems : function chooseShopItems() {
		let items = prompt("Перечислети через запятую товар", "");
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt("Подождите, Еще ",""));
		mainList.shopItems.sort();
	}
}

console.log(mainList);

mainList.chooseShopItems();

let text = document.querySelectorAll('.week');
let i = 0;
mainList.shopItems.forEach(function(item, i, arr) {
	text[i].innerHTML = "У нас вы можете преобрести " + item;
})