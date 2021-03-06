// Import React
import React from 'react';
// Import Spectacle Core tags
import { Deck, Heading, Slide, Image, Text, List, ListItem } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Require CSS

import 'normalize.css';

const ascii = 'sum_1^{M-1}2+2';
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`;

const theme = createTheme(
	{
		primary: '#FFFFFF',
		secondary: '#796EFF',
		tertiary: '#1B1A40',
		quarternary: '#00E1AA'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['fade']} bgColor="tertiary">
					<Heading caps size={2} textColor="primary">
						Reconocimiento, caracterización y clasificación de audio
						de vocales.
					</Heading>
				</Slide>

				<Slide transition={['fade']} bgColor="primary">
					<Heading caps size={2} textColor="secondary">
						Autores
					</Heading>
					<List textAlign="center" textColor="quarternary">
						<ListItem>Joshy Lopez Espada</ListItem>
						<ListItem>Alexander Ortega Vidal</ListItem>
						<ListItem>Bregy Malpartida Ramos</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Como </Heading>
				</Slide>
				<Slide transition={['zoom']}>
					<Heading size={2} caps>
						Extracción de caracteristicas
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={2} textColor="quarternary" caps>
						Inducción y analisis previo
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Image src={'https://k62.kn3.net/B/7/7/E/C/2/622.png'} />
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Image src={'https://k62.kn3.net/4/E/3/6/0/2/DEA.png'} />
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={1} textColor="secondary" caps>
						Estimación de formantes basado en LPC{' '}
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={2} textColor="quarternary" caps>
						¿Qué es una formante?{' '}
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={3} textColor="tertiary" caps>
						Formante
					</Heading>
					<Text>
						Es la concentración de energía acústica alrededor de una
						frecuencia particular en la señal de voz
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Formantes de las vocales
					</Heading>
					<Image
						src="https://k62.kn3.net/F/5/A/7/A/D/1D8.png"
						style="height: auto; width: 450px; margin-top: 40px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Diagrama extraído de [3]
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal a{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/8/3/4/D/4/3/B72.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal a2
					</Heading>
					<Image
						src="https://k62.kn3.net/D/B/7/C/5/8/FE3.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectrograma de la vocal a2{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/B/6/D/7/5/A/67D.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal e{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/B/0/8/2/1/A/9DD.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondarycaps">
						Espectrograma de la vocal e{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/B/1/1/D/8/E/13A.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal i{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/D/9/0/E/5/3/099.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectrograma de la vocal i{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/1/1/C/3/D/D/1FA.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal o{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/B/6/E/8/7/9/CCF.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectrograma de la vocal o{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/E/F/3/1/4/D/630.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectro de magnitud de la vocal u{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/F/6/0/2/5/5/89C.png"
						style="height: auto; width: 600px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						Espectrograma de la vocal u{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/3/E/6/4/9/3/8E3.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Diagrama de bloques{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/C/4/0/1/7/3/D10.png"
						style="height: auto; width: 350px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']}>
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Estimación de formantes basado en LPC{' '}
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={4} caps textColor="secondary" caps>
						{' '}
						Estimación de coeficientes LPC
					</Heading>

					<Image
						src="https://k62.kn3.net/4/0/6/5/5/8/FE0.png"
						style="height: auto; width: 600px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída [Gargouri Dorra, 1]
					</Text>
					<Text> Donde:</Text>
					<List>
						<ListItem style={{ fontSize: '32px' }}>
							{' '}
							s(n) es la señal de habla
						</ListItem>
						<ListItem style={{ fontSize: '32px' }}>
							{' '}
							aLP(i) son los coeficientes de predicción linear
						</ListItem>
						<ListItem style={{ fontSize: '32px' }}>
							{' '}
							s(n-i) son muestras pasadas de la señal del habla
						</ListItem>
						<ListItem style={{ fontSize: '32px' }}>
							{' '}
							e(n) es el error de la predicción linear
						</ListItem>
					</List>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={4} caps textColor="secondary" caps>
						{' '}
						Análisis LPC{' '}
					</Heading>
					<Text>
						Se expresa el polinomio LPC como un producto de raíces
					</Text>

					<Image
						src="https://k62.kn3.net/F/A/3/6/3/1/003.png"
						style="height: auto; width: 600px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída [Gargouri Dorra, 1]
					</Text>
					<Text>
						Y solamente se analizan las raíces que sean pares
						complejos conjugados, ya que ellos presentan resonancia
						en frecuencia
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={4} caps textColor="secondary" caps>
						{' '}
						Determinación de formantes{' '}
					</Heading>
					<Text>Determinación de la frecuencia de las formantes</Text>
					<Image
						src="https://k62.kn3.net/7/5/1/C/1/B/CD7.png"
						style="height: auto; width: 400px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '15px' }}>
						Fórmula extraída [Gargouri Dorra, 1]
					</Text>
					<Text>Determinación del ancho de banda</Text>
					<Image
						src="https://k62.kn3.net/9/A/6/0/4/F/B3A.png"
						style="height: auto; width: 400px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '15px' }}>
						Fórmula extraída [Gargouri Dorra, 1]
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="primary">
					<Heading size={1} textColor="secondary" caps>
						Análisis Cepstral{' '}
					</Heading>
				</Slide>

				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Diagrama de bloques{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/2/9/C/9/E/D/AC5.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Descomposición Homomórfica
					</Heading>
					<Text>
						<p align="middle">
							La descomposición homomórfica es diseñada para
							separar componentes de señales
							convolucionadas[Deconvolución]
						</p>
					</Text>
					<Image
						src="https://k62.kn3.net/F/4/8/D/D/1/B02.png"
						style="height: auto; width: 250px; margin-top: 40px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída de [4]
					</Text>
					<Text style={{ leftmargin: '0px' }}>
						<p align="left">Donde :</p>
					</Text>
					<List>
						<ListItem>
							f[n]: Exitación de la vocal por cuerdas vocales
						</ListItem>
						<ListItem>h[n]: Tracto vocal, lengua y boca.</ListItem>
					</List>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						{' '}
						Expresión del Cepstrum
					</Heading>
					<Text>Trasformada de Fourier:</Text>
					<Image
						src="https://k62.kn3.net/F/2/7/E/6/8/92A.png"
						style="height: auto; width: 220px; margin-top: 25px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída de [4]
					</Text>
					<Text>
						Con el fin de separar el producto de funciones, se
						aplica el siguiente artificio:
					</Text>
					<Image
						src="https://k62.kn3.net/2/B/F/3/D/4/729.png"
						style="height: auto; width: 300px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída de [4]
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="secondary" caps>
						{' '}
						Expresión del Cepstrum
					</Heading>
					<Text>
						Por ultimo se aplica la Transformada Inversa de Fourier
					</Text>
					<Image
						src="https://k62.kn3.net/A/B/A/0/F/C/ED0.png"
						style="height: auto; width: 450px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída de [4]
					</Text>
					<Image
						src="https://k62.kn3.net/9/4/5/6/C/C/F5C.png"
						style="height: auto; width: 550px; margin-top: 20px"
					/>
					<Text style={{ fontSize: '20px' }}>
						Expresión extraída de [4]
					</Text>
					<Text>
						Obteniendo como variable independiente "quefrency", la
						cual se encuentra en el dominio del tiempo.
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={5} textColor="secondary" caps>
						{' '}
						Liftering
					</Heading>
					<Text>
						Se define como la etapa de filtrado en el dominio
						cepstral, elimina los sonidos generados por el tracto
						vocal, lengua y boca. Solo se usará la información
						generada por la exitación de las cuerdas vocales.
					</Text>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={5} textColor="secondary" caps>
						{' '}
						Proceso inverso
					</Heading>
					<Text>
						Se realiza el proceso inverso a lo efectuado para hallar
						el Cepstrum. Esto con el fin de trabajar en el dominio
						de la frecuencia y poder evalular las formantes de cada
						vocal.
					</Text>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading textColor={'quarternary'} caps>
						Clasificación de carateristicas
					</Heading>
				</Slide>

				<Slide transition={['slide']}>
					<Heading size={3} caps textColor={'quarternary'}>
						¿Qué intentaremos hacer?
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Con las caracteristicas ya encontradas, intentaremos
						clasificar (distinguir) el patrón que guarda la relación
						entre las de la misma clase (\a\, \e\, \i\, \o\ y \u\).
					</Text>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Clasificadores a evaluar
					</Heading>
					<List textColor={'tertiary'}>
						<ListItem>K-nearest neighbors</ListItem>
						<ListItem>Feedforward Neural Network</ListItem>
						<ListItem>Elman Neural Network</ListItem>
					</List>
					{/* <Text>
						<MathJax.Node>{ascii}</MathJax.Node>
					</Text> */}
				</Slide>
				<Slide transition={['zoom']}>
					<Heading size={2} caps textColor={'secondary'}>
						K-nearest neighbors
					</Heading>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Como funcionan?
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						Es un método de clasificación y regresion que se encarga
						de relacionar caracteristicas cercanas entre diferentes
						muestras. Para esto se apoya de un cojunto de muestras
						ya conocidas y clasificadas.
					</Text>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Como funcionan?
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						Ejemplo de funcionamiento del algoritmo de K-NN.
					</Text>
					<Image src={'https://i.stack.imgur.com/J5r01.png'} />
				</Slide>

				<Slide transition={['slide']}>
					<Heading size={2} caps textColor={'secondary'}>
						Feedforward Neural Network
					</Heading>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Como funcionan?
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						Aprovechan la aproximación de un modelo biológico: las
						redes neuronales biológicas. Para realizar la
						clasificación se basa en la optimización de una cantidad
						finita de parametros [G. Bebis, 5].
					</Text>
				</Slide>

				<Slide transition={['slide']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funcionan?
					</Heading>
					<Text>
						Estructura y representación matemática de una "neurona
						artificial"
					</Text>
					<Image
						style={{ marginTop: '40px' }}
						src={
							'https://cdn-images-1.medium.com/max/800/1*uyIJXyLOI4-ETDmcWFsKvQ.png'
						}
					/>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funcionan?
					</Heading>
					<Text>
						El error se minimiza usando un algoritmo de
						optimización, el más usado es el llamado{' '}
						<b>Descenso de Gradiente</b>.
					</Text>
					<Image
						style={{ marginTop: '40px' }}
						src={
							'https://cdn-images-1.medium.com/max/800/1*qECe1Fg-5r1sqYJIbO4pLQ.png'
						}
					/>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						En el artículo de R. B. Shinde, extrajeron
						caracteristicas usando el método de LPC y para la
						posterior clasificación{' '}
						<b>usaron una FNN con 20 neuronas en la capa oculta</b>{' '}
						logrando un 90.9% de accuracy. [R. B. Shinde, 6]
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						Existen multitud de artículos donde evaluan el
						performance de las redes neuronales de propagación hacia
						adelante para <b>speech recognition</b>. Los más
						conocidos son los modelos de <b>deep learning</b>{' '}
						[George E. Dahl, 7].
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={2} caps textColor={'secondary'}>
						El contexto y las{' '}
						<b>redes neuronales recurrentes (RNN)</b>
					</Heading>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={2} caps textColor={'secondary'}>
						¿Qué es el contexto?
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						El "contexto" es una forma de explicar la dependencia
						temporal, o no, de un tipo de dato. En el caso de speech
						recognition se suele usar esto para entender la
						dependencia temporal en una señal de audio.{' '}
						<b>
							{' '}
							Las diferentes formas de dicción de una persona no
							hacen que la vocal sea distinta.
						</b>
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={2} caps textColor={'quarternary'}>
						Red de Elman
					</Heading>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funciona?
					</Heading>
					<Text>
						Una red de elman es una red hibrida con neuronas
						recurrentes llamadas neuronas de contexto. [Elman,
						Jeffrey L., 8]
					</Text>
					<Image
						style={{ marginTop: '40px' }}
						src="https://web.stanford.edu/group/pdplab/pdphandbook/srn_net.png"
					/>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funciona?
					</Heading>
					<Text>
						Para entrenar está red se hace una modificación al
						típico algoritmo de backpropagation, esto para dotarle
						de una caracteristica temporal que necesita la red para{' '}
						<b>perdurar su "contexto"</b>.
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funciona?
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Una red de elman es una red hibrida con neuronas
						recurrentes llamadas neuronas de contexto. Estas
						neuronas recurrentes se asocian a la capa oculta del
						modelo.
					</Text>
					<Image
						style={{ marginTop: '30px' }}
						src="https://k62.kn3.net/4/0/1/A/2/D/0C5.png"
					/>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'secondary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						ACOUSTIC-PHONETIC DECODING BASED ON ELMAN PREDICTIVE
						NEURAL NETWORKS <b>[F. Freitag, E. Monte, 9]</b>
					</Text>
					<Image src="https://k62.kn3.net/F/9/D/E/B/A/201.png" />
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'secondary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Arabic Speech Recognition Using Recurrent Neural
						Networks <b>[M. M. El Choubass et al, 10]</b>
					</Text>
					<Image src="https://k62.kn3.net/D/1/0/3/C/3/2D4.png" />
				</Slide>

				<Slide transition={['slice']} bgColor="quarternary">
					<Heading caps textColor="tertiary">
						{' '}
						Nuestro modelo{' '}
					</Heading>
				</Slide>

				<Slide transition={['slice']} bgColor="primary">
					<Heading size={2} caps textColor="secondary">
						Redundancia
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Despues de hacer algunas pruebas con las diferentes
						vocales y sus caracteristicas, nos percatamos que estás
						caracteristicas no son muy claras en algunos casos (/o/,
						/e/ y /u/).{' '}
						<b>
							Es por eso que nuestro modelo tratará de implementar
							redundancia para realizar una mejor clasificación.
						</b>
					</Text>
				</Slide>

				<Slide transition={['slice']} bgColor="primary">
					<Heading size={2} caps textColor="secondary">
						Redundancia
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						<b>
							Usaremos las formantes extraidas de Linear
							Predictive Coefficents (LPC)
						</b>{' '}
						y las formantes halladas con el analisis Cepstral. Es
						probable que en vez de usar Cepstral usemos una
						caracteristica más simple de la señal como pueden ser
						simplemente picos de energía en su espectrometría. Sin
						embargo{' '}
						<b>
							esto lo validaremos y definiremos para el proximo
							trabajo
						</b>.
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={2} caps textColor="quarternary">
						Nuestro clasificador
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						<b>Usaremos una red de Elman</b> con una capa oculta
						para la clasificación de las caracteristicas de entrada
						que, como ya dijimos antes, serán redundantes para una
						mayor fiabilidad de clasificación.
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={1} caps textColor="tertiary">
						Referencias
					</Heading>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor="tertiary">
						Referencias
					</Heading>
					<List style={{ fontSize: '20px' }}>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[1] GARGOURI, DORRA & KAMMOUN, ALI & Hamida, Ahmed.
							(2006). A Comparative Study of Formant Frequencies
							Estimation Techniques.
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[2] Snell, Roy C., and Fausto Milinazzo. "Formant
							location from LPC analysis data." IEEE® Transactions
							on Speech and Audio Processing
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[3] Bradlow, Ann. (1995). A comparative acoustic
							study of English and Spanish vowels. The Journal of
							the Acoustical Society of America. 97. 1916-24.
							10.1121/1.412064
						</ListItem>

						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[4] Kundur...
						</ListItem>
					</List>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor="tertiary">
						Referencias
					</Heading>
					<List style={{ fontSize: '20px' }}>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[5] G. Bebis. (2012). Vowel Classification based on
							LPC and ANN.
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[6] G. Bebis. (1990). Feed-forward neural networks.
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[7] George E. Dahl. (2007). Deep neural networks for
							acoustic modeling in speech recognition: The shared
							views of four research groups.
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[8] Elman, Jeffrey L. (1990). Finding structure in
							time.
						</ListItem>
					</List>
				</Slide>
				<Slide transition={['slice']}>
					<Heading size={3} caps textColor="tertiary">
						Referencias
					</Heading>
					<List style={{ fontSize: '20px' }}>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[9] M. M. El Choubassi, H. E. El Khoury, C. E. Jabra
							Alagha, J. A. Skaf and M. A. AlAlaoui. Arabic Speech
							Recognition Using Recurrent Neural Networks.
						</ListItem>
						<ListItem
							style={{ fontSize: '32px', marginTop: '20px' }}
						>
							[10] F. Freitag, E. Monte. (1999). ACOUSTIC-PHONETIC
							DECODING BASED ON ELMAN PREDICTIVE NEURAL NETWORKS.
						</ListItem>
					</List>
				</Slide>
			</Deck>
		);
	}
}
