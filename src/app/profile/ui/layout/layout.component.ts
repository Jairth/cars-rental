import { Component, inject, ViewChild, viewChild } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { ProfileService } from "../../services/profile.service";
import { ToastComponent } from "../../../shared/components/toast/toast.component";
@Component({
	selector: "app-layout",
	imports: [ReactiveFormsModule, ToastComponent],
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
	@ViewChild('toast') toast!: ToastComponent;

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
        this.carsRentUser = response.data.filter((rent:any) => rent.cliente_uuid === this.userLocalStorage.id);
				this.getCar();
			},
			error: (error) => {},
		});
	}

	getCar() {
    this.profileService.getCar().subscribe({
        next: (response: any) => {
            this.carsRentUser = this.carsRentUser
                .map((rent: any) => {
                    const vehiculo = response.data.find((v: any) => v.id === rent.vehiculo_id);
                    if (vehiculo) {
                        return {
                            ...rent,
                            marca: vehiculo.marca,
                            modelo: vehiculo.modelo
                        };
                    }
                    return rent;
                })
                .sort((a: any, b: any) => b.id - a.id);

            console.log(this.carsRentUser);
        },
        error: (error) => {
            console.error(error);
        },
    });
}

	updateStateRent(idRent:number, dateEndRent:string) {
		const endDay = this.stateRent(dateEndRent)
		const bodyRentDevolution = this.isBodyDevolutionRent(idRent, endDay)
		console.log(endDay);

		console.log(bodyRentDevolution);

		this.profileService.updateRent(endDay,idRent).subscribe({
			next: (response) => {
				console.log(response);
    		this.getRentCar();

				this.toast.showToast('Estado actualizado con éxito', 'success')

				this.profileService.insertDevolutionRent(bodyRentDevolution).subscribe(reponse => console.log(response))
			},
			error: (error) => {
				this.toast.showToast('Error al actualizar el estado', 'error')
			}
		})
	}

	isBodyDevolutionRent(idRent:number, dateEndRent: string) {
		const today = new Date().toISOString().split('T')[0];

		const body = {
			alquiler_id: idRent,
			fecha_entrega: today,
			comentarios: '',
			sancion: 0,
			devuelto_antes: dateEndRent === "Antes de tiempo",
			observacion: '',
		}

		const comentariosMap:Record<string, string> = {
			"Atrasado": "El usuario entregó el vehículo después de la fecha acordada.",
			"A tiempo": "El usuario entregó el vehículo en la fecha acordada.",
			"Antes de tiempo": "El usuario entregó el vehículo antes de la fecha esperada."
		};

		const observacionMap: Record<string, string> = {
			"Atrasado": "Aplicar sanción según el contrato.",
			"A tiempo": "No hay observaciones adicionales.",
			"Antes de tiempo": "Verificar si el vehículo presenta daños o faltantes."
		};

		if (dateEndRent === "Atrasado") {
			body.sancion = 100;
		}

		body.comentarios = comentariosMap[dateEndRent] || '';
		body.observacion = observacionMap[dateEndRent] || '';
		return body;
	}

	stateRent(dateEndRent: string): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [year, month, day] = dateEndRent.split('-').map(Number);
    const dateEnd = new Date(year, month - 1, day);
    dateEnd.setHours(0, 0, 0, 0);

    if (dateEnd.getTime() === today.getTime()) {
        return "A tiempo";
    }
    if (dateEnd.getTime() < today.getTime()) {
        return "Atrasado";
    }
    return "Antes de tiempo";
	}

	typeStateRent(stateRent:string) {
		switch (stateRent) {
			case 'Activo':
				return 'activo'
			case 'A tiempo':
				return 'tiempo'
			case 'Atrasado':
				return 'atrasado'
			default:
				return 'antes-tiempo'
		}
	}
}
