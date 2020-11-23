import { Component, Input } from '@angular/core';
import { IMatch } from '../../dto/Match';

@Component({
	selector: 'generated-match',
	templateUrl: './generated-match.component.html',
	styleUrls: ['./generated-match.component.css']
})
export class GeneratedMatchComponent {
	@Input() match: IMatch;

	constructor() { }

}
