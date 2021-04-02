const BuyMe = () => (
	<>
		<style jsx>{`
			.bmc-button .taco {
				margin-bottom: 1px !important;
				box-shadow: none !important;
				border: none !important;
				vertical-align: middle !important;
				font-size: 1.5em;
				line-height: 1em;
			}
			.bmc-button {
				padding: 7px 10px 7px 10px !important;
				text-decoration: none !important;
				display: inline-flex !important;
				color: #ffffff !important;
				background-color: #ff813f !important;
				border-radius: 5px !important;
				border: 1px solid transparent !important;
				padding: 7px 10px 7px 10px !important;
				box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
				-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
				margin: 0.5em 0.3em 0;
				-webkit-box-sizing: border-box !important;
				box-sizing: border-box !important;
				-o-transition: 0.3s all linear !important;
				-webkit-transition: 0.3s all linear !important;
				-moz-transition: 0.3s all linear !important;
				-ms-transition: 0.3s all linear !important;
				transition: 0.3s all linear !important;
				width: 99%;
				font-size: 0.85em;
			}
			.bmc-button:hover,
			.bmc-button:active,
			.bmc-button:focus {
				-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
				text-decoration: none !important;
				box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
				opacity: 0.85 !important;
				color: #ffffff !important;
			}
		`}</style>
		<a
			className="bmc-button"
			target="_blank"
			href="https://www.paypal.com/biz/fund?id=CX2U4GQ57973S"
			rel="noopener noreferrer"
		>
			<span
				src="https://www.flaticon.com/svg/vstatic/svg/590/590836.svg?token=exp=1617399793~hmac=fa2a532d86df5a080a5e9ed1d83c0991"
				alt="Invítame a un café"
				className="taco"
			>
				☕
			</span>
			<span style={{ marginLeft: "15px", fontWeight: "bold" }}>
				Invítame a un café
			</span>
		</a>
	</>
);

export default BuyMe;
