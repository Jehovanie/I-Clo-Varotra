import imgLogoSociete_fake from "../../assets/brand_default.jpg";

const LogoSociete = ({ name, imgLogoSociete: img_logo_societe }) => {
	return (
		<div className="w-full h-full rounded-full overflow-hidden">
			<img className="w-full h-full" src={imgLogoSociete_fake} alt="Default Brand image" />
		</div>
	);
};

export default LogoSociete;
