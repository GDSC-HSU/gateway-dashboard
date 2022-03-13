import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  prefix = "/device";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getDevices() {
    return this.http.get(environment.endpoint + this.prefix, {
      headers: {
        "token": this.authService.token,
        "api-x-key": environment.apiKey,
      }
    });
  }

  createDevice() { }
}
