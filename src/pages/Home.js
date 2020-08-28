import React from 'react';
import HeaderCarousel from '../components/HeaderCarousel/HeaderCarousel'

function Home() {
	return (
		<div>
			<HeaderCarousel />
			<h3 className='home-CTA'>Sign  up  for  a  newsletter  here!</h3>
			<div className="boxes">
				<div className="box">Il senso del rugby non è difficile da comprendere: due squadre di 15 giocatori si sfidano sul campo per una partita di 2 tempi da 40 minuti</div>
				<div className="box">l'uno, con un intervallo di 10 minuti in mezzo. Una squadra corre con la palla, l'altra cerca di impedirgli di raggiungere la linea di meta, e di segnare punto.</div>
				<div className="box">La parola rugby è utilizzata nel mondo per definire sport diversi. Per non complicare le cose, descriveremo brevemente il Rugby Union, le cui regole governano </div>
			</div>
			<div className='trips-description'>
				<h3>TRIPS</h3>
				I'l senso del rugby non è difficile da comprendere: due squadre di 15 giocatori si sfidano sul campo per una partita di 2 tempi da 40 minuti l’uno, con un intervallo di 10 minuti in mezzo. Una squadra corre con la palla, l’altra cerca di impedirgli di raggiungere la linea di meta, e di segnare punto. Tuttavia ci sono molte regole che disciplinano le interazioni tra le squadre. Ecco una breve guida per i principianti:

				La palla non può essere passata di mano in avanti. Non sono permessi passaggi o palleggi in avanti, la palla può solo essere calciata o tenuta in mano durante la corsa. I giocatori possono però passarsela in linea o all’indietro.
				L’obiettivo del rugby è andare a “meta”. Ci sono molti modi per andare a meta, ma in tutti i casi è necessario superare la linea di meta e “schiacciare” a terra la palla. La squadra che va a meta acquisisce 5 punti e ha l’opportunità di calciare il lancio di “trasformazione”, del valore di 2 punti. Per realizzare una trasformazione, la palla deve passare tra i pali della porta al di sopra della traversa.
			</div>
		</div>
	);
};

export default Home;
