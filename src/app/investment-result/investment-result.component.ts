import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

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
  results = input<{
    year: number,
    intrest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalIntrest: number,
    totalAmountInvested: number
  }[]>();
}
