import {Component, inject} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'shared-cancel-form-button',
  standalone: true,
  imports: [],
  templateUrl: './cancel-form-button.component.html',
  styleUrl: './cancel-form-button.component.css'
})
export class CancelFormButtonComponent {
  private location = inject(Location)

  goBack(){
    this.location.back();
  }
}
