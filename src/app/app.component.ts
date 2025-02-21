import { Component, inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  localeId = inject(LOCALE_ID)

  title = 'ssr-i18n-angular19';

  constructor() {
    console.log(this.localeId);
  }
}
