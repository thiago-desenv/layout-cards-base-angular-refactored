import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header',
  host: { 'class': 'ca-c-card_header' }
})
export class CardHeaderDirective {}
