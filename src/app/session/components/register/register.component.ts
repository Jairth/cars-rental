import { Component, inject, signal } from "@angular/core";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { SesionsService } from "../../services/sesions.service";

@Component({
	selector: "app-register",
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.css",
	host: {
		class: "wrapper",
	},
})
export default class RegisterComponent {
	//Injects
	private readonly sesionsService = inject(SesionsService);
	private fb = inject(FormBuilder);
	// private toast = inject(ToastrService);
	private router = inject(Router);


	registerForm = signal(
		this.fb.group({
			email: new FormControl<string>("", {
				validators: Validators.required,
			}),
			password: new FormControl<string>("", {
				validators: Validators.required,
			}),
		}),
	);

	async signUp() {
		console.log("click");
		if (this.registerForm().invalid) {
			this.registerForm().markAllAsTouched();
			return;
		}

		const { email, password } = this.registerForm().value;
		const result = await this.sesionsService.signUp(
			email!,
			password!,
		);

		if (result.success) {
			// this.alertDialog()!.open();
			// this.toast.success("Cuenta registrada correctamente.")
			this.resetForm();
			this.router.navigate(['session/login']);
		} else {
			console.error("Error durante el registro:", result.error);
		}
	}

	resetForm() {
		const form = this.registerForm();
		form.reset();
		form.markAsPristine();
		form.markAsUntouched();
	}

	hasError(text:string) {
		return this.registerForm().get(text)?.invalid && this.registerForm().get(text)?.touched;
	}
}
