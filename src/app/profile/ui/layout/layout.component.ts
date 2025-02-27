import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ProfileService } from "../../services/profile.service";

@Component({
	selector: "app-layout",
	imports: [ReactiveFormsModule],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export default class LayoutComponent {
	private fb = inject(FormBuilder);
	private profileService = inject(ProfileService);

	public authToken = localStorage.getItem("sb-ycmtrsipzymqgigyfhnu-auth-token");
	public clientEmail = this.authToken
		? JSON.parse(this.authToken).user.user_metadata.email
		: null;
	public clientId = "";

	formProfile = this.fb.group({
		nombre: [""],
		email: [""],
		nacimiento: [""],
		celular: [""],
		tipo_documento: [""],
		documento: [""],
		preferencia_comunicacion: [""],
		licencia: [""],
	});


  userLocalStorage:any = '';
  carsRentUser:any = [];

	ngOnInit() {
    const user = localStorage.getItem('sb-ycmtrsipzymqgigyfhnu-auth-token');

    if (user) {
      this.userLocalStorage = JSON.parse(user).user;
    }

    // console.log(this.userLocalStorage);

		this.getDataClient();
    this.getRentCar();
    this.getCar();
	}

	onSubmit() {
		if (this.formProfile.invalid) {
			return;
		}

		this.updateClient();
	}

	getDataClient() {
		if (this.clientEmail) {
			this.profileService.getClient(this.clientEmail).subscribe((data) => {
				// console.log(data);
				if (data) {
					const userData = data?.data ? data.data[0] : null;
					this.clientId = userData.id;
					this.formProfile.patchValue({
						nombre: userData.nombre,
						email: userData.email,
						nacimiento: userData.nacimiento,
						celular: userData.celular,
						tipo_documento: userData.tipo_documento,
						documento: userData.documento,
						preferencia_comunicacion: userData.preferencia_comunicacion,
						licencia: userData.licencia,
					});
				}
			});
		}
	}

	updateClient() {
		const clientData = this.formProfile.value;
		const clientId = this.clientId;
		this.profileService.updateClient(clientData, clientId).subscribe((data) => {
			console.log(data);
		});
	}

	getRentCar() {
		this.profileService.getRentCar().subscribe({
			next: (response:any) => {
				// console.log(response);
        this.carsRentUser = response.data.filter((rent:any) => rent.cliente_uuid === this.userLocalStorage.id);
			},
			error: (error) => {},
		});
	}

	getCar() {
		this.profileService.getCar().subscribe({
			next: (response:any) => {
				this.carsRentUser = this.carsRentUser.map((rent: any) => {
          const vehiculo = response.data.find((v: any) => v.id === rent.vehiculo_id);

          if (vehiculo) {
            return {
              ...rent,
              marca: vehiculo.marca,
              modelo: vehiculo.modelo
            };
          }

          return rent; // Si no hay coincidencia, devuelve el objeto sin cambios
        });

        console.log(this.carsRentUser);
			},
			error: (error) => {},
		});
	}
}
