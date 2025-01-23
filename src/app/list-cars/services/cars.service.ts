import { inject, Injectable } from "@angular/core";
import { from, map } from "rxjs";
import { SupabaseService } from "../../shared/services/supabase.service";
import type { Vehiculo } from "../interface/cars.interface";

@Injectable({
	providedIn: "root",
})
export class CarsService {
	private supabaseClient = inject(SupabaseService).supabaseClient;

	getAllCars() {
		return from(
			this.supabaseClient.from("vehiculo").select("*").returns<Vehiculo[]>(),
		).pipe(map((data) => data.data));
	}
}
