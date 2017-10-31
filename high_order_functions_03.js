function hazardWarningCreator(typeOfWarning) {
	let warningCounter=0;
	let plural='';
	return function(location){
		warningCounter++;
		if(warningCounter>1){
			plural='s';
		}
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${plural} today!`);
	}
}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const floodWarning = hazardWarningCreator('Flooded road');
const fireWarning = hazardWarningCreator('Active fire');

rocksWarning('Main St and Pacific Ave');
floodWarning('Central Ave');
fireWarning('California');
floodWarning('East Nowhere St');