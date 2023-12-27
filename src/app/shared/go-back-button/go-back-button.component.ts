import {Component, inject} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'shared-go-back-button',
  standalone: true,
  imports: [],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.css'
})
export class GoBackButtonComponent {
  private location = inject(Location)

  goBack(){
    this.location.back();
  }
}
