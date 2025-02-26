import { inject, Injectable } from "@angular/core";
import { SupabaseService } from "../../shared/services/supabase.service";

@Injectable({
	providedIn: "root",
})
export class CheckoutService {
	private supabaseClient = inject(SupabaseService).supabaseClient;

	async onCheckoutCar(body: any) {
    try {
      const { data, error } = await this.supabaseClient
        .from("alquiler")
        .insert(body)
        .select();
      console.log(data);
    } catch (error) {

      console.log(error);
    }
	}
}
