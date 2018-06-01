import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private oauthService: OAuthService) { }

  ngOnInit() {
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }

  login() {
    this.oauthService.initImplicitFlow('/architects');
  }

  logout() {
    this.oauthService.logOut();
  }

  navigateToLink(link) {
    this.router.navigate(['/' + link]);
  }

}
