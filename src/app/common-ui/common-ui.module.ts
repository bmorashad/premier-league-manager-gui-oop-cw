import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalErrorComponent } from './modal/modal-error/modal-error.component';
import { ModalConfirmComponent } from './modal/modal-confirm/modal-confirm.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Title1Component } from './title1/title1.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [ ModalConfirmComponent, ModalErrorComponent, ModalComponent, NavbarComponent, Title1Component, SnackbarComponent, DatePickerComponent, TabsComponent, TabComponent, PrimaryButtonComponent, IconButtonComponent ],
  imports: [
    CommonModule
  ],
  exports: [
	  ModalConfirmComponent,
	  ModalErrorComponent,
	  ModalComponent,
	  NavbarComponent,
	  Title1Component,
	  DatePickerComponent,
	  SnackbarComponent,
	  TabComponent,
	  TabsComponent,
	  PrimaryButtonComponent,
	  IconButtonComponent
  ]
})
export class CommonUiModule { }
