import { Component, inject, input, signal } from "@angular/core";
import type { Vehiculo } from "../../interface/cars.interface";
import { Router, RouterLink } from "@angular/router";

@Component({
	selector: "app-popup-car",
	imports: [RouterLink],
	templateUrl: "./popup-car.component.html",
	styleUrl: "./popup-car.component.css",
})
export default class PopupCarComponent {
	private router = inject(Router);

	car = input<Vehiculo>();
	itemCar = signal<Vehiculo>({
		id: 0,
		administrador_dni: 0,
		categoria: "",
		imagen: "",
		color: "",
		estado_id: 0,
		kilometraje: 0,
		marca: "",
		modelo: "",
		numero_asientos: 0,
		placa: "",
		soat: "",
		transmision: "",
		price: "",
		ocupantes: "",
	});

	ngOnInit() {
		const state = history.state;
		// console.log(state);
		if (state?.car) {
			this.itemCar.set(state.car);
			// console.log(this.car());
		} else {
			console.log("No se ha recibido el objeto `car` desde el estado");
		}

		// console.log(this.itemCar());
	}

	routeCheckout() {
		// console.log(this.itemCar());
		this.router.navigate(["/checkout-offers"], {
			state: { car: this.itemCar() },
		});
	}
}
