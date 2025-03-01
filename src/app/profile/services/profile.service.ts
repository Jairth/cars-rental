import { inject, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { SupabaseService } from '../../shared/services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private supabaseClient = inject(SupabaseService).supabaseClient;

  getClient(email: string) {
    return from(
      this.supabaseClient.from("cliente").select("*").eq("email", email)
    )
  }

  updateClient(client:any, id:string) {
    // console.log(client);
    return from(
      this.supabaseClient.from("cliente").update(client).eq("id", id).select()
    )
  }

  getRentCar() {
		return from(this.supabaseClient.from("alquiler").select("*").returns());
	}

  getCar() {
    return from(this.supabaseClient.from("vehiculo").select("*").returns());
  }

  updateRent(stateRent:string, id:number) {
    return from(
      this.supabaseClient.from("alquiler").update({estado_alquiler: stateRent}).eq("id", id).select()
    )
  }

  insertDevolutionRent(body:any) {
    return from(
      this.supabaseClient.from('devolucion').insert(body).select()
    )
  }
}
