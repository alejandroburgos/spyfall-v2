import React from "react";
import Link from "next/link";

const HowToPlay = () => {
	return (
		<>
			<div className="main-menu">
				<h3>¿Cómo se juega?</h3>
				<hr />
				<div>
					<p>
					Spyfall se basa en el juego de mesa del mismo nombre, así que si
					has jugado eso antes, entenderás la versión web. Se necesita al menos 3 o 4 jugadores, 
					pero Spyfall es mejora partir de 5 o 6
					jugadores. También puede haber 7 o más jugadores, pero el juego puede
					volverse demasiado fácil para el espía.
					</p>
					<p>
					En mi opinión, la forma más fácil de aprender a jugar Spyfall sería
					ver jugar a otra persona, ya que te ayudará a tener una idea de la
					dinámica del juego. Aquí hay un video en YouTube de algunas personas.
					jugando:
					</p>
					<div style={{ textAlign: "center" }}>
						<iframe
							src="https://www.youtube.com/embed/O7W0rH6YpeI"
							className="embed-responsive-item"
						/>
					</div>
					<br />
					<p>
					En resumen, cuando comience el juego, un jugador aleatorio se convertirá en el
					espía, y a todos los demás se les dará una ubicación y un papel dentro del
					ubicación. Por ejemplo, si la ubicación de una ronda era "restaurante",
					un jugador puede ser el chef, otro el camarero, otro el
					cliente, etc. Los jugadores no sabrán quién es el espía y el espía
					no sabrá la ubicación. Los jugadores se turnan para hacer preguntas
					entre ellos, haciendo todo lo posible para no revelar directamente la ubicación en
					sus preguntas y respuestas, pero sin ser demasiado vago como para plantear
					sospecha. El grupo de jugadores que no son espías gana si por unanimidad
					acordar la identidad del jugador espía. El espía gana si se dan cuenta
					la ubicación, que tienen la oportunidad de gritar en cualquier momento
					durante la ronda. El espía también gana si los demás jugadores por unanimidad
					acusar a otra persona, o no puede decidir por unanimidad que alguien
					acusar.
					</p>
					<p>
					Si quieres un poco más de detalle, puedes leer el oficial completo.
					libro de reglas de la versión del juego de mesa de Spyfall{" "}
						<a
							href="https://www.cryptozoic.com/sites/default/files/icme/u30695/spy_rules_eng_0.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							aquí
						</a>
						.
					</p>

					<style jsx>{`
						text-align: left;
					`}</style>
				</div>
			</div>
			<Link href="/">
				<button>Volver a Spyfall</button>
			</Link>
		</>
	);
};

export default HowToPlay;
