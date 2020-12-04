import { Input, Component,  Output, EventEmitter, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
// import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
// import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalService } from './modal.service';
import { ModalAction } from './types';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	group,
	query,
	animateChild
} from '@angular/animations'

@Component({
	selector: 'modals',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
	animations: [
		trigger('fadeIn', [
			state('show', style({
				visibility: 'visible',
				opacity: '1',
			})),
			state('hide', style({
				visibility: 'hidden',
				opacity: '0',
				transition: 'visibility 0s, opacity 0.5s linear'
			})),
			transition('hide <=> show', [
				group([
					query('@popOverState', [
						animateChild()
					]),
					animate('150ms ease-in')
				])
			]),
		]),
		trigger('popOverState', [
			state('show', style({
				transform: 'translateY(0)',
				opacity: '1',
			})),
			state('hide', style({
				transform: 'translateY(-100%)',
				opacity: '0'
			})),
			transition('hide => show', animate('100ms 100ms ease-in') ),
			transition('show => hide', animate('150ms ease-out'))
		])
	]
})
export class ModalComponent  implements OnInit{
	@Output() response = new EventEmitter<boolean>();
	@Input() title: string
	@Input() _id: string = 'modal'
	status: Observable<ModalAction>;
	show: boolean = false;
	// @ContentChildren("modal-container") modals: QueryList<ModalErrorComponent | ModalConfirmComponent>


	get showName() {
		return this.show ? 'show' : 'hide'
	}
	onCloseResponse() {
		this.response.emit(false);
		this.modalService.close(this._id);
	}
	ngOnInit() : void {
		this.status = this.modalService._watch();
		this.status.subscribe(action => {
			if(action[0] == 'open' && action[1] == this._id) {
				this.show = true;
			} else if(action[0] == 'close' && action[1] == this._id) {
				this.show = false;
			} else if(action[0] == 'toggle' && action[1] == this._id) {
				this.show = !this.show;
			}
		})
	}

	constructor(private modalService: ModalService) { }
	// ngAfterContentInit() { }


}
