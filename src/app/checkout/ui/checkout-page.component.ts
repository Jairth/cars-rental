import { CheckoutService } from './../services/checkout.service';
import { Component, computed, inject, input, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import type { Vehiculo } from "../../list-cars/interface/cars.interface";

@Component({
	selector: "app-checkout-page",
	imports: [ReactiveFormsModule],
	templateUrl: "./checkout-page.component.html",
	styleUrl: "./checkout-page.component.css",
})
export default class CheckoutPageComponent {
	private route = inject(Router);
	private fb = inject(FormBuilder);
	private CheckoutService = inject(CheckoutService);

	formCheckout = this.fb.group({
		fecha_inicio: ['', Validators.required],
		fecha_fin: ['', Validators.required],
		adicional: ['', Validators.required],
		seguro: ['', Validators.required],
		lugar_entrega: ['', Validators.required],
		garantia: ['', Validators.required],
		vehiculo_id: [0, Validators.required],
		cliente_uuid: ['', Validators.required],
		estado_alquiler: ['Activo', Validators.required],
	})


	client:any = {}

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
		const client = localStorage.getItem('sb-ycmtrsipzymqgigyfhnu-auth-token');

		if (client) {
			this.client = JSON.parse(client).user;
		}

		const state = history.state;
		if (state?.car) {
			this.itemCar.set(state.car);
		}

		console.log(this.itemCar());
	}

	onSubmit() {

		this.formCheckout.patchValue({
			vehiculo_id: this.itemCar().id,
			cliente_uuid: this.client.id,
		})

		console.log(this.formCheckout.value);

		if (this.formCheckout.invalid) {
			return;
		}

		this.CheckoutService.onCheckoutCar(this.formCheckout.value);

		this.route.navigate(["/payment"], {
			state: { rent: this.formCheckout.value },
		});
	}


	daysRent() {
			const start = new Date(this.formCheckout.value.fecha_inicio || '');
			const end = new Date(this.formCheckout.value.fecha_fin || '');

			const diff = end.getTime() - start.getTime();
			const days = diff / (1000 * 60 * 60 * 24);

			return days;
	}
}
