import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppSharedModule } from '../app-shared/app-shared.module';

/* THIS IS LAZY LOADED COMPONENT */
@Component({
  //selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  APP_HEADER_BTN_VALUES = {
    HOME: 'btnHome',
    ADMIN: 'btnAdmin',
  };

  currentTheme = 'default';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

/* THIS MODULE IS NEEDED IN THIS FILE TO INJECT DEPENDENCIES FOR THE ABOVE LAZY LOADED COMPONENT */
@NgModule({
  declarations: [AppHeaderComponent],
  //imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  imports: [AppSharedModule],
  bootstrap: [AppHeaderComponent],
})
class AppHeaderModule {}
