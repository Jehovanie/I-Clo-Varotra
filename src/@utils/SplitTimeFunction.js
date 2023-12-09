const splitTime = (nbrTime) => {
	let day = 0,
		hours = 0,
		min = 0,
		sec = 0;

	if (nbrTime <= 0) {
		return { day, hours, min, sec };
	}

	let temp = nbrTime % (24 * 60 * 60);

	day = (nbrTime - temp) / (24 * 60 * 60);
	hours = (temp - (temp % (60 * 60))) / (60 * 60);

	temp %= 60 * 60;
	min = (temp - (temp % 60)) / 60;

	sec = temp % 60;

	return { day, hours, min, sec };
};

export default splitTime;
