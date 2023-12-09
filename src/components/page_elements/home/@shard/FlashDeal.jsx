import { useEffect, useState } from "react";
import splitTime from "../../../../@utils/SplitTimeFunction";

function FlashDeal({ time }) {
	const [stateTime, setStateTime] = useState(time);
	const [isExpire, setIsExpire] = useState(false);
	let timesFlasdDeal = splitTime(stateTime);

	const classFlash = {
		alert: "text-center p-2 rounded-md  text-red-500 font-bold mb-2 bg-red-100",
		primary: "text-center p-2 rounded-md  text-white font-bold mb-2 bg-blue-300",
	};

	useEffect(() => {
		if (stateTime > 0) {
			timesFlasdDeal = splitTime(stateTime);
			setTimeout(() => {
				setStateTime((last_time) => last_time - 1);
			}, 1000);
		}

		if (stateTime === 0) {
			setIsExpire(true);
		}
	}, [stateTime]);

	return (
		<div className=" bg-blue-200 text-center p-4 w-full">
			<h3 className="text-blue-600 text-xl font-bold mb-2"> FLASH DEAL </h3>
			<div className="bg-blue-500 text-white p-3 flex justify-center items-center w-full gap-2">
				<div className={isExpire ? classFlash.alert : classFlash.primary}>
					<h3 className="text-xl">{timesFlasdDeal.day}</h3>
					<p className="text-sm"> Day</p>
				</div>
				<div>:</div>
				<div className={isExpire ? classFlash.alert : classFlash.primary}>
					<h3 className="text-xl">{timesFlasdDeal.hours}</h3>
					<p className="text-sm"> hrs</p>
				</div>
				<div>:</div>
				<div className={isExpire ? classFlash.alert : classFlash.primary}>
					<h3 className="text-xl">{timesFlasdDeal.min}</h3>
					<p className="text-sm"> Min</p>
				</div>
				<div>:</div>
				<div className={isExpire ? classFlash.alert : classFlash.primary}>
					<h3 className="text-xl">{timesFlasdDeal.sec}</h3>
					<p className="text-sm">Sec</p>
				</div>
			</div>
		</div>
	);
}

export default FlashDeal;
