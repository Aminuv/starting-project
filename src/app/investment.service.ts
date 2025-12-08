import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from './investment-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  investmentResults= signal< {
    year: number,
    intrest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalIntrest: number,
    totalAmountInvested: number
  } []>([]);

   onCalculateInvestmentResult( data : InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i <= duration; i++) {
      let year = i + 1;
      const interstEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interstEarnedInYear;
      investmentValue += interstEarnedInYear + annualInvestment;
    
      const totalIntrest = 
        investmentValue - (initialInvestment + (annualInvestment * year));
      annualData.push({
        year: year,
        intrest: interstEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalIntrest: totalIntrest,
        totalAmountInvested: initialInvestment + (annualInvestment * year)
      });
    };
    this.investmentResults.set(annualData);
    
  }
}
