import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '1054571797188-33le97tbg52svngevk92ogbkths7tu6l.apps.googleusercontent.com',
      callback: (response: any) => this.handleLogin(response)
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangular',
      width: 350
    })
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any){
    if(response){
      // Decode the token
      const userIdentity = this.decodeToken(response.credential);
      // Store in the session
      sessionStorage.setItem("userIdentity", JSON.stringify(userIdentity));
      // Navigate to post Login Page
      this.router.navigate(['dashboard']);
    }
  }

}
