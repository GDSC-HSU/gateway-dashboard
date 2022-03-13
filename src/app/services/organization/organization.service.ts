import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { map } from 'rxjs';
import { Organization } from 'src/app/models/organization';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  prefix = "/organization";

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  getOrganization() {
    return this.http.get(environment.endpoint + this.prefix, {
      headers: { "token": this.authService.token },
    });
  }

  saveOrganization(formData: FormData) {
    return this.http.post(environment.endpoint + this.prefix, formData, {
      headers: { "token": this.authService.token, "api-x-key": "123" }
    });
  }

}
