import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanage.css";

export default function Orphanage() {
	
	return (
		<div id='page-orphanage'>
			
			<Sidebar />

			<main>
				<div className='orphanage-details'>
					<img
						src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
						alt='Lar das meninas'
					/>

					<div className='images'>
						<button className='active' type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
						<button type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
						<button type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
						<button type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
						<button type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
						<button type='button'>
							<img
								src='https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg'
								alt='Lar das meninas'
							/>
						</button>
					</div>

					<div className='orphanage-details-content'>
						<h1>Lar das meninas</h1>
						<p>
							Presta assistência a crianças de 06 a 15 anos que se encontre em
							situação de risco e/ou vulnerabilidade social.
						</p>

						<div className='map-container'>
							<Map
								center={[-27.2092052, -49.6401092]}
								zoom={16}
								style={{ width: "100%", height: 280 }}
								dragging={false}
								touchZoom={false}
								zoomControl={false}
								scrollWheelZoom={false}
								doubleClickZoom={false}
							>
								<TileLayer
									url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
								/>
								<Marker
									interactive={false}
									icon={mapIcon}
									position={[-27.2092052, -49.6401092]}
								/>
							</Map>

							<footer>
								<Link to=''>Ver rotas no Google Maps</Link>
							</footer>
						</div>

						<hr />

						<h2>Instruções para visita</h2>
						<p>
							Venha como se sentir mais à vontade e traga muito amor para dar.
						</p>

						<div className='open-details'>
							<div className='hour'>
								<FiClock size={32} color='#15B6D6' />
								Segunda à Sexta <br />
								8h às 18h
							</div>
							<div className='open-on-weekends'>
								<FiInfo size={32} color='#39CC83' />
								Atendemos <br />
								fim de semana
							</div>
						</div>

						<button type='button' className='contact-button'>
							<FaWhatsapp size={20} color='#FFF' />
							Entrar em contato
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
