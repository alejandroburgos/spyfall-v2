import BuyMe from "./BuyMe";

const ThanksForPlaying = () => (
	<>
		<div className="card">
			<div className="text">
				¡Gracias por jugar a Spyfall!
				<br />
			</div>

			<div className="text">or, if you're feeling hungry:</div>
			<div style={{ width: "148px", margin: "0 auto" }}>
				<BuyMe />
			</div>
		</div>
		<style jsx>{`
			.card {
				margin: 2em auto 0;
				border: 2px solid #ddd;
				padding: 1em;
				max-width: 18em;
				font-size: 0.9em;
			}
			.text {
				font-size: 0.9em;
			}
			button {
				margin: 0.8em 0 1.1em;
			}
		`}</style>
	</>
);

export default ThanksForPlaying;
