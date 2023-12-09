const CustomButton = ({ textShow: text_show, customClass: custom_class }) => {
	const add_class = custom_class.join(" ");
	const class_name =
		"flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none " + add_class;

	return (
		<button type="button" className={class_name}>
			<div className="m-auto">
				<div className="flex items-center justify-start flex-1 space-x-4">
					<span className="font-medium mb-[-2px]">{text_show}</span>
				</div>
			</div>
		</button>
	);
};

export default CustomButton;
