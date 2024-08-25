import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  authService = inject(AuthService);
  userName = JSON.parse(sessionStorage.getItem("userIdentity")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("userIdentity")!).picture;
  userEmail = JSON.parse(sessionStorage.getItem("userIdentity")!).email;

  signOut(){
    sessionStorage.removeItem("userIdentity");
    this.authService.signOut();
  }
}
