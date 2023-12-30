import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-entries-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './entries-layout.component.html',
  styleUrl: './entries-layout.component.css'
})
export default class EntriesLayoutComponent {

}
