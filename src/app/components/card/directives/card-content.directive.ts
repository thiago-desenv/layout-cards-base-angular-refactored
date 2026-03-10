import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  host: { 'class': 'ca-c-card_content' }
})
export class CardContentDirective {}
