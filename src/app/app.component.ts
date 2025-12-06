import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  investmentResults = signal<{
    year: number,
    intrest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalIntrest: number,
    totalAmountInvested: number
  }[] | undefined> (undefined);

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
