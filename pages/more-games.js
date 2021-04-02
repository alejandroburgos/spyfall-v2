import React from "react";
import Link from "next/link";

import Page from "../components/Page";

const MoreGames = () => {
	return (
		<>
			<div className="main-menu">
				<h3>Próximos juegos como Spyfall</h3>
				<hr />
				<GameLink
					title="Drawphone"
					subtitle="por Sawer"
					link="#"
				/>

				<GameLink
					title="Codewords"
					subtitle="por Sawer"
					featuring="Basado en Codenames"
					link="#"
				/>

				<GameLink
					title="Fake Artist Online"
					subtitle="por Sawer"
					featuring="Basado en Un artista falso va a Nueva York"
					link="#"
				/>

				<GameLink
					title="The Jackbox Party Packs"
					subtitle="por Sawer"
					link="#"
				/>

				<GameLink
					title="netgames.io"
					subtitle="por Sawer"
					link="#"
				/>

				<GameLink
					title="Out of Context"
					subtitle="por Sawer"
				/>

				<GameLink
					title="Secret Hilter"
					subtitle="por Sawer"
				/>

				<GameLink
					title="QwiqWit"
					subtitle="por Sawer"
				/>

				<GameLink
					title="Snakeout"
					subtitle="por Sawer"
					featuring="Basado en The Resistance"
				/>
			</div>
			<Link href="/">
				<button>Volver a Spyfall</button>
			</Link>
		</>
	);
};

const GameLink = ({ title, link, subtitle, featuring }) => (
	<div className="game">
		<a href={link} target="_blank" rel="noopener noreferrer">
			{title}
		</a>
		{featuring && <div>{featuring}</div>}
		<div>
			<i>{subtitle}</i>
		</div>

		<style jsx>{`
			.game {
				margin-bottom: 1.2em;
				font-size: 0.9em;
			}
			a {
				font-size: 1.3em;
			}
		`}</style>
	</div>
);

export default MoreGames;
