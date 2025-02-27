import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class HomeService {
	clients = [
		{
			name: "Volskwagen",
			img:"assets/gifs/wolkswagen.gif",
		},
		{
			name: "Toyota",
			img:"assets/gifs/giphy.gif",
		},
		{
			name: "Chevrolet",
			img:"assets/gifs/carro2.gif",
		},
		{
			name: "Ford",
			img: "assets/gifs/ford.gif",
		},
		{
			name: "Mercedes-Benz",
			img: "assets/gifs/mercedez.gif",
		},
		{
			name: "Audi",
			img: "assets/gifs/audi.gif",
		},
	];

	testimonials = [
		{
			name: "Rebecca Miller",
			text: "Recientemente alquilé un auto para un viaje familiar, y quedé impresionado con el nivel de servicio que recibí. Desde el momento en que llegué a la oficina, el personal fue amable y profesional, explicándome cada detalle del contrato y las opciones disponibles. El vehículo estaba en perfecto estado, limpio y con el tanque lleno, listo para salir a la carretera.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dc6701d7a0b7329ccd_rebeca-miller-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "big",
		},
		{
			name: "Lily Woods",
			text: "Tuve una excelente experiencia alquilando un vehículo con esta empresa. Reservé todo en línea y el proceso fue súper sencillo. Cuando llegué a recoger el auto, me atendieron con una sonrisa y respondieron todas mis preguntas con paciencia, ya que era mi primera vez alquilando un coche. Durante mi viaje, todo funcionó a la perfección.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dcbcac400a4a67d328_lily-woods-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "Mike Warren",
			text: "Planeé un viaje de negocios de último momento y necesitaba un auto con urgencia. Contacté a Spartans Car Rental y no solo me ofrecieron un excelente precio, sino que también agilizaron todo para que pudiera recoger el auto en menos de una hora. El auto era moderno, cómodo y estaba en perfecto estado.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dccdcaeb6642c97d7f_andy-smith-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "John Smith",
			text: "Alquilé una camioneta para unas vacaciones familiares y fue la mejor decisión que pude tomar. Desde el inicio, el personal me ayudó a elegir el vehículo ideal para nuestras necesidades y nos explicaron detalladamente todo sobre el seguro y las políticas de uso. El vehículo estaba impecable y muy cómodo para mi familia de cinco personas, con espacio suficiente para todas nuestras maletas.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dc154299248ce63eb9_mike-warren-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
		{
			name: "Jane Smith",
			text: "He alquilado autos en varias empresas, pero ninguna ha igualado la calidad de servicio que recibí aquí. Desde la transparencia en los precios hasta la excelente atención del personal, todo fue impecable. Me ofrecieron varias opciones de autos y me explicaron cuál sería la más conveniente según mis necesidades.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dcbcac400a4a67d328_lily-woods-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "big",
		},
		{
			name: "John Johnson",
			text: "Siempre estoy en movimiento por mi trabajo, y encontrar una empresa que me facilite el alquiler de autos ha sido un alivio. Reservé por teléfono y cuando llegué, el auto ya estaba listo para mí. No perdí tiempo con trámites innecesarios, y la entrega del vehículo fue igual de eficiente.",
			photo:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/643035dccdcaeb6642c97d7f_andy-smith-testimonial-avatar-play-webflow-ecommerce-template.jpg",
			background_image:
				"https://cdn.prod.website-files.com/64137e8e937fc64702ebd8fe/6436d74140275157f8b32d9a_facebook-client-video-bg-play-webflow-ecommerce-template-transcode.mp4",
			grid_span: "small",
		},
	];

	faqs = [
		{
			question: "¿Cuáles son los requisitos para alquilar un auto?",
			answer: "Para alquilar un auto, necesitas:",
			list: [
				"Ser mayor de 21 años (en algunos casos, 25 años).",
				"Tener una licencia de conducir válida.",
				"Presentar una tarjeta de crédito o débito a tu nombre para el depósito de garantía.",
				"Algunos países también requieren un permiso de conducir internacional."
			]
		},
		{
			question: "¿Qué incluye el costo del alquiler?",
			answer: "El costo del alquiler generalmente incluye:",
			list: [
				"Uso del vehículo por el período contratado.",
				"Seguro básico contra accidentes.",
				"Kilometraje limitado o ilimitado (dependiendo de la tarifa seleccionada).",
				"Sin embargo, servicios adicionales como GPS, sillas para niños o seguros extra tienen un costo adicional."
			]
		},
		{
			question: "¿Puedo devolver el auto en una oficina diferente?",
			answer: 'Sí, ofrecemos la opción de devolución en una ubicación diferente. Esto se conoce como "alquiler de ida" y puede tener un cargo adicional dependiendo de la distancia entre las oficinas. Te recomendamos verificar la disponibilidad y el costo al momento de la reserva.',
			list: [],
		},
		{
			question: "¿Qué debo hacer en caso de accidente o emergencia?",
			answer: "En caso de accidente o emergencia:",
			list: [
				"Comunícate de inmediato con la compañía de alquiler a través del número de emergencia proporcionado en el contrato.",
				"Si es necesario, llama a las autoridades locales para reportar el incidente.",
				"No intentes reparar el vehículo por tu cuenta.",
				"Recuerda conservar cualquier informe policial o documento relacionado para entregarlo al devolver el auto."
			]
		}
	]
}
