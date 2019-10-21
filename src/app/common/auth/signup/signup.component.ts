import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TavernService } from '../../../taverns/tavern.service';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userName = '';
  password = '';
  tavernName = '';
  role = 'admin';
  taverns = [];
  selectedTavern = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tavernService: TavernService
  ) {
    this.tavernService.getAllTaverns().subscribe(
      (response) => {
        console.log(response);
        this.taverns = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  signup(): void {
    let user: {};

    if (this.role === 'admin') {
      user = {
        UserName: this.userName,
        Password: this.password,
        Tavern: {
          ID: 0,
          tavernName: this.tavernName
        }
      }
    }
    else if (this.role = 'manager') {
      user = {
        UserName: this.userName,
        Password: this.password,
        Tavern: this.selectedTavern
      }
    }

    console.log(user);

    this.authService.create(user).subscribe((answer) => {
      this.router.navigateByUrl('/login');
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/login');
  }
}
