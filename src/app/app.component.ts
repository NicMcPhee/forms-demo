import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDemoComponent } from './form-demo/form-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-demo';
}
