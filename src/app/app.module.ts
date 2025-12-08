import { AppComponent } from "./app.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { HeaderComponent } from "./header/header.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestmentResultComponent
    ],
      imports: [
    FormsModule,
    BrowserModule
  ],
    bootstrap: [AppComponent]
})

export class AppModule { }