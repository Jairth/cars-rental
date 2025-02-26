import { PaymentService } from "./../services/payment.service";
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-payment-page",
	imports: [ReactiveFormsModule],
	templateUrl: "./payment-page.component.html",
	styleUrl: "./payment-page.component.css",
})
export default class PaymentPageComponent {
	private route = inject(Router);
	private fb = inject(FormBuilder);
	private paymentService = inject(PaymentService);

	rentCar = {};
	rent: any[] = [];
	car: any[] = [];
	daysRent = 0;
	paymentLoading = false;

	formPayment = this.fb.group({
		alquiler_id: ["", Validators.required],
		monto_vehiculo: [0, Validators.required],
		fecha_pago: ["", Validators.required],
		metodo_pago: ["", Validators.required],
		estado_id: [1, Validators.required],
		monto_adicional: [0, Validators.required],
		monto_igv: [0, Validators.required],
		monto_total: ["", Validators.required],
		comprobante: [1, Validators.required],
	});

	ngOnInit() {
		this.paymentLoading = false;
		const state = history.state;
		if (state?.rent) {
			this.rentCar = state.rent;
		}

		console.log(this.rentCar);
		this.getRentCar(this.rentCar);
	}

	onSubmit() {
		// console.log(this.formPayment.value);

		this.formPayment.patchValue({
			alquiler_id: this.rent[0].id,
		});
		if (this.formPayment.invalid) {
			return;
		}

		console.log(this.formPayment.value);

		this.paymentService.createPayment(this.formPayment.value);

		this.paymentLoading = true;

		this.resetForm();
	}

	getRentCar(rent: any) {
		this.paymentService.getRentCar().subscribe({
			next: (response: any) => {
				// console.log(response);

				if (response) {
					this.rent = response.data.filter(
						(rentCars: any) => rentCars.lugar_entrega === rent.lugar_entrega,
					);
					console.log(this.rent);
					this.daysRent = this.daysRentFormat(this.rent[0].fecha_inicio, this.rent[0].fecha_fin);
					this.formPayment.patchValue({
						alquiler_id: this.rent[0].id,
						monto_adicional: this.rent[0].garantia,
					});
					this.getCar();

					console.log(this.formPayment.value.monto_adicional);
				}
			},
			error: (error) => {},
		});
	}

	getCar() {
		this.paymentService.getCar().subscribe({
			next: (response: any) => {
				// console.log(response);
				if (response) {
					this.car = response.data.filter(
						(car: any) => car.id === this.rent[0].vehiculo_id,
					);
					console.log(this.car);
					this.formPayment.patchValue({
						monto_vehiculo: this.car[0].price * Number(this.daysRent),
						monto_igv: Math.round(this.car[0].price * Number(this.daysRent) * 0.18 * 100) / 100,
						monto_total:
							(this.car[0].price * Number(this.daysRent)) +
							(this.car[0].price * Number(this.daysRent)) * 0.18 +
							this.rent[0].garantia,
					});

					console.log(this.formPayment.value);
				}
			},
			error: (error) => {},
		});
	}

	daysRentFormat(fecha_inicio:string, fecha_fin:string) {
		const start = new Date(fecha_inicio);
		const end = new Date(fecha_fin);

		const diff = end.getTime() - start.getTime();
		const days = diff / (1000 * 60 * 60 * 24);

		return days;
	}

	resetForm() {
		this.formPayment.reset();
		this.rentCar = {};
		this.rent = [];
		this.car = [];
		this.daysRent = 0;
	}

	routePayment() {
		this.route.navigate(["/list-cars"]);
	}
}
