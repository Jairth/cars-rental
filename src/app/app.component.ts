import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SupabaseService } from "./shared/services/supabase.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "spartans-car-rental";
	private supabaseService = inject(SupabaseService);

	async ngOnInit() {
		// try {
		// 	const auth = await this.supabaseService.signIn();
		// 	if (auth.error) {
		// 		console.log("Error al autenticar", auth.error.message);
		// 	} else {
		// 		console.log("Sesión iniciada", auth);
		// 	}
		// } catch (error) {
		// 	console.error(error);
		// }
	}
}
