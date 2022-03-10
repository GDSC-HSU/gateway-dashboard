import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Organization } from 'src/app/models/organization';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  prefix = "/organization";
  headers = {
    "token": this.authService.token,
    "api-x-key": "123",
  }
  constructor(private authService: AuthService, private http: HttpClient) { }

  saveOrganization(formData: FormData) {
    return this.http.post(environment.endpoint + this.prefix, formData, { headers: this.headers });
  }

}
