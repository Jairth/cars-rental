import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../shared/services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class SesionsService {
  private supabaseClient = inject(SupabaseService).supabaseClient;
	private router = inject(Router)

  async signUp(
		email: string,
		password: string,
	): Promise<{ success: boolean; error?: any }> {
		try {
      const role = 'cliente';
			const { data } = await this.supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: role,
          },
        },
      });

      const { data: clienteData, error: clienteError } = await this.supabaseClient
      .from('cliente')
      .insert({ email: email })
      .select();

			// console.log(data);
			return { success: true };
		} catch (error) {
			// console.log(error);
			return { success: true };
		}
	}

	async logIn(
		email: string,
		password: string,
	) {
			const {data, error} = await this.supabaseClient.auth.signInWithPassword({
				email: email,
				password: password,
			});

			if(error?.code === "invalid_credentials") {
				return { error: error };
			}
				return { data: data };
	}

	redirectToLogin(): void {
    this.router.navigate(['/sessions']);
  }
}
