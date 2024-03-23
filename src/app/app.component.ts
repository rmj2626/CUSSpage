import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactUsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CUSSpage';
}
