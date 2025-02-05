import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-layout',
  imports: [ReactiveFormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
    private fb = inject(FormBuilder)
    private profileService = inject(ProfileService)

    public authToken = localStorage.getItem("sb-ycmtrsipzymqgigyfhnu-auth-token");
	  public clientEmail = this.authToken ? JSON.parse(this.authToken).user.user_metadata.email : null;
    public clientId = '';

    formProfile = this.fb.group({
        nombre: [''],
        email: [''],
        nacimiento: [''],
        celular: [''],
        tipo_documento: [''],
        documento: [''],
        preferencia_comunicacion: [''],
        licencia: [''],
    })

    ngOnInit() {
      this.getDataClient();
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
          console.log(data);
          if (data) {
            const userData = data?.data ? data.data[0] : null;
            this.clientId = userData.id
            this.formProfile.patchValue({
              nombre: userData.nombre,
              email: userData.email,
              nacimiento: userData.nacimiento,
              celular: userData.celular,
              tipo_documento: userData.tipo_documento,
              documento: userData.documento,
              preferencia_comunicacion: userData.preferencia_comunicacion,
              licencia: userData.licencia,
            })
          }
        })

      }
    }

    updateClient() {
      const clientData = this.formProfile.value;
      const clientId = this.clientId
      this.profileService.updateClient(clientData, clientId).subscribe((data) => {
        console.log(data);
      })
    }
}
