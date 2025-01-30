import {
	Component,
	DestroyRef,
	inject,
	signal,
	viewChild,
} from "@angular/core";
import { CarsService } from "../../services/cars.service";
import type { Vehiculo } from "../../interface/cars.interface";
import { Router } from "@angular/router";
import PopupCarComponent from "../popup-car/popup-car.component";
import { SkeletonListCarComponent } from "@shared/components/skeleton-list-car/skeleton-list-car.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
	selector: "app-list-cars-page",
	imports: [SkeletonListCarComponent],
	templateUrl: "./list-cars-page.component.html",
	styleUrl: "./list-cars-page.component.css",
})
export default class ListCarsPageComponent {
	private carsService = inject(CarsService);
	private router = inject(Router);
	private destroy = inject(DestroyRef);

	public listCars: Vehiculo[] | undefined = [];
	public popup = viewChild(PopupCarComponent);
	// public car = signal<Vehiculo>(null)
	public itemCar = signal<Vehiculo>({
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
		this.getCars();
	}

	getCars() {
		this.carsService
			.getAllCars()
			.pipe(takeUntilDestroyed(this.destroy))
			.subscribe({
				next: (response) => {
					console.log(response);
					if (response) {
						this.listCars = response;
					}
				},
				error: (err: Error) => {
					console.log(err);
				},
			});
	}

	onPopupCar(car: Vehiculo) {
		this.router.navigate(["/list-offers/car/", car.id], {
			state: { car: car },
		});

		// this.popup();
		// if (this.popup()) {
		// }
		// const popupInstance = this.popup();
		// if (popupInstance) {
		// 	popupInstance.car() = car;
		// }
		// if (this.itemCar() !== car) {
		// 	return;
		// }
		// const firstElement = document.querySelector(".start");
		// const secondElement = document.querySelector(".end");
		// document.startViewTransition(() => {
		// 	this.itemCar.set(car);
		// 	if (firstElement && secondElement) {
		// 		firstElement.addEventListener("click", () => {
		// 			document.startViewTransition(() => {
		// 				firstElement.classList.toggle("end");
		// 				firstElement.classList.toggle("start");
		// 				secondElement.classList.toggle("start");
		// 				secondElement.classList.toggle("end");
		// 			});
		// 		});
		// 	}
		// 	this.cdr.detectChanges();
		// 	const popoverElement = document.querySelector(
		// 		`[data-car-id="${car.id}"]`,
		// 	);
		// 	if (popoverElement) {
		// 		setTimeout(() => {
		// 			(popoverElement as HTMLElement).showPopover();
		// 		}, 0);
		// 	}
		// 	console.log(this.itemCar());
		// });
	}
}
