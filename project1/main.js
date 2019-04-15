let money,
	izena,
	prise,
	time,
	openBtn = document.querySelector('#open-btn');
	//поля левого меню
let name = document.querySelector('.name'),
    nameValue = document.querySelector('.name-value'),
    budgeValue = document.querySelector('.budget-value'),
    goodsValue = document.querySelector('.goods-value'),
    itemsValue = document.querySelector('.items-value'),
    employersValue = document.querySelector('.employers-value'),
    discount = document.querySelector('.discount'),
    discountValue = document.querySelector('.discount-value'),
    isopenValue = document.querySelector('.isopen-value');
	//поля правой формы
let goodsItem = document.querySelectorAll('.goods-item'),
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.count-budget-value'),
    hireEmployersEtem = document.querySelectorAll('.hire-employers-item'),
    //btn
    goodsItemBtn = document.querySelector('.goods-item-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    hireEmployersBtn = document.querySelector('.hire-employers-btn');

openBtn.addEventListener('click', ()=>{
	money = prompt("Ваш бюджет?", "");

	while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", "");
	}
	budgeValue.textContent = money;

	nameValue.textContent = prompt("Название ващего магазина?", "").toUpperCase();
});

goodsItemBtn.addEventListener('click',()=>{
    for(let i = 0; i<goodsItem.length; i++){
        let a = goodsItem[i].value;

        if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length<50 ) {
            console.log('Все верно!');
            mainList.shopGoods[i] = a;
            goodsValue.textContent = mainList.shopGoods;
        }else{
            i = --i;
        }
    }
});

chooseItem.addEventListener('change',()=>{
    let items = chooseItem.value;
    if (isNaN(items) && items != '') {
        mainList.shopItems = items.split(',');
        mainList.shopItems.sort();

        itemsValue.textContent = mainList.shopItems;
    }
});

timeValue.addEventListener('change',()=>{
	time = timeValue.value;
    if (time<0) {
        console.log("Такого не может быть");
        mainList.open = false;
    }else if (time > 8 && time < 20) {
        console.log('Время работать');
        mainList.open = true;
    }else if (time < 24) {
        console.log('Уже слишком поздно');
        mainList.open = false;
    }else{
        console.log('в сутках только 24 часа');
        mainList.open = false;
    }
    if (mainList.open) {
    	isopenValue.style.backgroundColor = 'green';
	}else {
        isopenValue.style.backgroundColor = 'red';
	}
});

countBudgetBtn.addEventListener('click',()=>{
	countBudgetValue.value = money / 30;
});

hireEmployersBtn.addEventListener('click',()=>{
    for(let i = 0; i<=hireEmployersEtem.length; i++){
        let name = hireEmployersEtem[i].value;
        mainList.employers[i] = name;
        employersValue.textContent += mainList.employers[i] + ",";
    }

});




let mainList = {
	budzhet : money,
	name : izena,
	shopGoods : [],
	employers : {},
	open : false,
	discount : true,
	shopItems : [],

	calculateDiscount : function calculateDiscount() {
			if (true == mainList.discount) {
				prise = prise / 100 * 80;
		}
	}
};
