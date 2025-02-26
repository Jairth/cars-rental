import { inject, Injectable } from "@angular/core";
import { SupabaseService } from "../../shared/services/supabase.service";
import { from } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class PaymentService {
	private supabaseClient = inject(SupabaseService).supabaseClient;

	getRentCar() {
		return from(this.supabaseClient.from("alquiler").select("*").returns());
	}

  getCar() {
    return from(this.supabaseClient.from("vehiculo").select("*").returns());
  }

	async createPayment(body:any) {
		try {
			const { data, error } = await this.supabaseClient
				.from("pago")
				.insert(body)
				.select();

      console.log(data);
		} catch (error) {}
	}
}
