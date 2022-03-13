import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  items: NbMenuItem[] = [
    {
      title: 'Device',
      icon: 'hard-drive-outline',
      link: 'device',
    },
    {
      title: 'Organization',
      icon: 'cube-outline',
      link: 'organization',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: '',
    },
    {
      title: 'Account',
      icon: 'person-outline',
      link: '',
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: '',
    },
  ];
}
