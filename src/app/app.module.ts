import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { StockInventoryService } from 'src/app/services/stock-inventory.service';

class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Handle the error here
    console.error('Hiep write this An error occurred:', error);
    // // Optionally re-throw the error to propagate it further
    // throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: ErrorHandler, useClass: CustomErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
