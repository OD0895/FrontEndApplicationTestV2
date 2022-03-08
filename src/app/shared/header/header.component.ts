import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FrontEndApplicationTestV2';
  sesion: boolean;

  constructor(private authService: AuthService,) {

  }

  ngOnInit(): void {
    this.sesion = this.authService.isLoggedIn();
  }

  logout() {
    this.sesion = false;
    this.authService.logout();
  }

}
