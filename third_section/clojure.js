function defineCarModel(carModel) {
	let object = {};
	return horsePower => {
		object[carModel] = horsePower;
		return object;
	}
}

let car = defineCarModel('Ferrari');
console.log(car('350HP'));