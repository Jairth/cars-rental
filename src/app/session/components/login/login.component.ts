import { Component, inject, signal } from "@angular/core";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { SesionsService } from "../../services/sesions.service";

@Component({
	selector: "app-login",
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
	host: {
		class: "wrapper",
	},
})
export default class LoginComponent {
	//Injects
	private readonly sesionsService = inject(SesionsService);
	private fb = inject(FormBuilder);
	private router = inject(Router);

	loginForm = signal(
		this.fb.group({
			email: new FormControl<string | null>(null, {
				validators: Validators.required,
			}),
			password: new FormControl<string | null>(null, {
				validators: Validators.required,
			}),
		}),
	);

	async signIn() {
		if (this.loginForm().invalid) {
			this.loginForm().markAllAsTouched();
			return;
		}

		const { email, password } = this.loginForm().value;
		const result = await this.sesionsService.logIn(email!, password!);
		const authToken = localStorage.getItem("sb-ycmtrsipzymqgigyfhnu-auth-token");
		const typeClient = authToken ? JSON.parse(authToken).user.user_metadata.role : null;

		// console.log(result)
		// if(result) {
		// 	localStorage.setItem("token", result.data?.session?.access_token ?? '');
		// 	localStorage.setItem("user_meta", JSON.stringify(result.data?.user?.user_metadata ?? ''))
		// }
		if (result.data) {
			console.log(typeClient);
			this.resetForm();
			if(typeClient === "cliente") {
				this.router.navigate(["/list-offers"]);
			}
		} else {
			this.resetForm();
			console.error("Error durante el inicio de sesión:", result.error);
		}
	}

	resetForm() {
		const form = this.loginForm();
		form.reset();
		form.markAsPristine();
		form.markAsUntouched();
	}

	hasError(text:string) {
		return this.loginForm().get(text)?.invalid && this.loginForm().get(text)?.touched;
	}
}
