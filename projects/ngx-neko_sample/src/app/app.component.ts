import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxNekoComponent } from 'ngx-neko';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxNekoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-neko_sample';
}
