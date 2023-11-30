import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterLink,MatIconModule],
  templateUrl: './sign-up.component.html',

})
export class SignUpComponent {

}
