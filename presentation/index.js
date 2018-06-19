// Import React
import React from 'react';
// Import Spectacle Core tags
import { Deck, Heading, Slide, Image, Text, List, ListItem } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
// Require CSS

import MathJax from 'react-mathjax2';

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
					<Heading size={2} textColor="secondary" caps>
						Estimación de formantes basado en LPC{' '}
					</Heading>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={3} textColor="quarternary" caps>
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
						style="height: auto; width: 800px; margin-top: 20px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={4} caps textColor="secondary" caps>
						{' '}
						Análisis LPC{' '}
					</Heading>
					<Image
						src="https://k62.kn3.net/F/A/3/6/3/1/003.png"
						style="height: auto; width: 800px; margin-top: 20px"
					/>
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
					<Text>Determinación del ancho de banda</Text>
					<Image
						src="https://k62.kn3.net/F/A/3/6/3/1/003.png"
						style="height: auto; width: 400px; margin-top: 20px"
					/>
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
						src="https://k62.kn3.net/5/0/C/A/1/8/088.png"
						style="height: auto; width: 800px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Descomposición Homomórfica
					</Heading>
					<Text>
						La señal (sonidos) puede ser categorizada como sonoros y
						sordos. El sonoro incluye el sonido de la vocal. Los
						sordos son los sonidos realizados por la lengua, boca y
						tracto vocal.
					</Text>
					<Image
						src="https://k62.kn3.net/C/A/6/7/C/4/287.png"
						style="height: auto; width: 500px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Transformada de Fourier
					</Heading>
					<Text>
						Sabemos que una convolución en dominio de tiempo es la
						multiplicación en el dominio de frecuencia por lo que a
						partir de esa definición tomamos la transformada de
						Fourier.
					</Text>
					<Image
						src="https://k62.kn3.net/8/7/7/6/B/6/076.png"
						style="height: auto; width: 500px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Aplicación del Logaritmo
					</Heading>
					<Text>
						Matemáticamente podemos separar la multiplicación de dos
						funciones en la suma de las magnitudes de sus
						logaritmos.
					</Text>
					<Image
						src="https://k62.kn3.net/2/4/A/6/C/F/326.png"
						style="height: auto; width: 500px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['fade']} bgColor="primary">
					<Heading size={6} textColor="tertiary" caps>
						{' '}
						Transformada inversa de Fourier
					</Heading>
					<Text>
						Aplicando la transformada inversa de Fourier obtenemos
						el cepstrum. Teniendo como variable independiente
						“quefrency”.
					</Text>
					<Image
						src="https://k62.kn3.net/9/4/5/6/C/C/F5C.png"
						style="height: auto; width: 500px; margin-top: 40px"
					/>
				</Slide>
				<Slide transition={['zoom']}>
					<Heading caps>Clasificación de las carateristicas</Heading>
				</Slide>

				<Slide transition={['slide']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Que intentaremos hacer?
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Con las caracteristicas en mano, intentaremos clasificar
						(distinguir) el patrón que guarda la relación entre las
						de la misma clase (A, E, I, O, U).
					</Text>
				</Slide>

				<Slide transition={['zoom']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Clasificadores a evaluar
					</Heading>
					<List>
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
						Son un método de clasificación y regresion que se
						encarga de relacionar caracteristicas cercanas entre
						diferentes muestras.
					</Text>
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
						Aprovechan la aproximación de un modelo biológico, las
						redes neuronales biológicas. Para realizar la
						clasificación se basa en la optimización de una cantidad
						finita de parametros. [G. Bebis].
					</Text>
				</Slide>

				<Slide transition={['slide']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funcionan?
					</Heading>
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
						logrando un 90.9% de accuracy. [R. B. Shinde]
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'quarternary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '40px' }}>
						Existen multitud de artículos donde evaluan el
						performance de las redes neuronales de propagación hacia
						adelante. Los más conocidos son los modelos de{' '}
						<b>deep learning</b> [George E. Dahl].
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={2} caps textColor={'secondary'}>
						El contexto y las{' '}
						<b>redes neuronales recurrentes (RNN)</b>
					</Heading>
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
						recurrentes llamadas neuronas de contexto.
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
						<b>perdurar su contexto</b>.
					</Text>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'tertiary'}>
						¿Cómo funciona?
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Una red de elman es una red hibrida con neuronas
						recurrentes llamadas neuronas de contexto.
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
						NEURAL NETWORKS <b>[F. Freitag, E. Monte]</b>
					</Text>
					<Image src="https://k62.kn3.net/F/9/D/E/B/A/201.png"></Image>
				</Slide>

				<Slide transition={['slice']}>
					<Heading size={3} caps textColor={'secondary'}>
						Usos conocidos
					</Heading>
					<Text style={{ marginTop: '30px' }}>
						Arabic Speech Recognition Using Recurrent Neural Networks <b>[M. M. El Choubass et al]</b>
					</Text>
					<Image src="https://k62.kn3.net/D/1/0/3/C/3/2D4.png"></Image>
				</Slide>
			</Deck>
		);
	}
}
