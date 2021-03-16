import { Component } from '@angular/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  q = RxwebValidators.required();
  title = 'testrxweb';
}
