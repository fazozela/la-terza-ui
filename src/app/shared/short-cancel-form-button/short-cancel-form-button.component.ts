import {Component, inject} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'shared-short-cancel-form-button',
  standalone: true,
  imports: [],
  templateUrl: './short-cancel-form-button.component.html',
  styleUrl: './short-cancel-form-button.component.css'
})
export class ShortCancelFormButtonComponent {
  private location = inject(Location)

  goBack(){
    this.location.back();
  }
}
