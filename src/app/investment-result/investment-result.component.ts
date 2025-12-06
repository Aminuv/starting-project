import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input() results?: {
    year: number,
    intrest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalIntrest: number,
    totalAmountInvested: number
  }[];
}
