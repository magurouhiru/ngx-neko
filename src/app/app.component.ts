import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxNekoLibraryComponent} from 'ngx-neko-library'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxNekoLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-neko';
}
