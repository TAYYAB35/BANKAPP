import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
  paymentDetails = {
    number: '+2491234567',
    account: '66682375877898968',
    amount: 'SDG 32,000,000',
    date: '22.3.2024',
    services: 'MTN Bill Inquiry',
    transactionId: '24354657869788765'
  };

  downloadInvoice() {
    // Logic to generate/download the invoice (placeholder function)
    console.log('Downloading Invoice...');
  }
}
