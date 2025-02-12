import { Component, Inject, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagesService } from '@services/pages.service';
import { SharedService } from '@services/shared.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from 'src/app/components';

interface ItemData {
  Name: string;
  account_number: string;
}

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [NzTabsModule, NzTableModule, TableComponent, RouterLink],
  templateUrl: './beneficiary.component.html',
  styles: ``
})
export class BeneficiaryComponent {

  isLoading = false;
  sharedService = Inject(SharedService);

  constructor(private pagesService: PagesService) {

  }

  ngOnInit() {
    this.getAllBeneficaries();
  }

  listOfData: ItemData[] = [
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
  ];


  getAllBeneficaries() {
    this.isLoading = true;
    const guid = localStorage.getItem('guid');
    this.pagesService.update('GET_ALL_BENEF', guid).subscribe(
      (response: { successFlag: any; message: any; }) => {
        if (response.successFlag) {
          console.log(response);
        } else {
          this.sharedService.createNotification('error', response?.message);
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('failed', error);
        this.isLoading = false;
      },
    );
  }

  getBenefById() {
    this.isLoading = true;
    const requestId = localStorage.getItem('guid');
    let body = {
      requestId,
      beneficiaryId: '1114'
    }
    this.pagesService.update('GET_BENEF_BY_ID', body).subscribe(
      (response: { successFlag: any; message: any; }) => {
        if (response.successFlag) {
          console.log(response);
        } else {
          this.sharedService.createNotification('error', response?.message);
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('failed', error);
        this.isLoading = false;
      },
    );
  }

  getBenefAccount() {
    const requestId = localStorage.getItem('guid');
    let body = {
      requestId,
      cif: '1114',
      inquiryPurpose: "Transfer"
    };

    this.pagesService.update('GET_BENEF_ACCOUNT', body).subscribe(
      (response: { successFlag: any; message: any; }) => {
        if (response.successFlag) {
          console.log(response);
        } else {
          this.sharedService.createNotification('error', response?.message);
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('failed', error);
        this.isLoading = false;
      }
    );
  }

  deleteBenef() {
    const requestId = localStorage.getItem('guid');
    let body = {
      requestId,
      beneficiaryId: '1110'
    }
    this.pagesService.update('DELETE_BENEF', body).subscribe(
      (response: { successFlag: any; message: any; }) => {
        if (response.successFlag) {
          console.log(response);
        } else {
          this.sharedService.createNotification('error', response?.message);
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('failed', error);
        this.isLoading = false;
      }
    );
  }
  ;

  addBenef() {
    const requestId = localStorage.getItem('guid');
    let body = {
      "requestId": "127da0a8-53ea-5150-998f-0c00cb343119",
      "cif": "13286",
      "accountType": "ACCOUNT",
      "accountId": "PbDhrC17Dqr5mdNtiAAEAZX3ZpMw8O+uexg/ep6Q7wrK8tDtU3WGDRcFcP8uWU9Pa2Caj4qx1w8lV9XEdGxZFHkFOIvf661k1Xl1itzgh7kJjZmLrsuxcogttWGApiC3MimhfDJH9zbsZIrM46vAZV55T5SJ7JEJCqZ7A8KVrzlCpmR09iVZNd2PG+AzuRTCBSXaEwcV+GZn+PUMmjMwMlgKvkZqFmDYM3Vlxu9OL+kh+3j0DRZfjAIaQ04hN5IX5/hxsTBArfbGMYuriZZ7B1P20ufu/KzTBMPgrt0RweXziVN8ZqGlyQNnlJS6L7D4UXd0l7Ob5+WK/v9zjdukwA==",
      "aliasName": "liea",
      "fullName": "liea",
      "fullNameAr": "liea"
    };

    this.pagesService.update('GET_BENEF_ACCOUNT', body).subscribe(
      (response: { successFlag: any; message: any; }) => {
        if (response.successFlag) {
          console.log(response);
        } else {
          this.sharedService.createNotification('error', response?.message);
          this.isLoading = false;
        }
      },
      (error: any) => {
        console.error('failed', error);
        this.isLoading = false;
      }
    );
  }


  getCompanyInfo() {
    throw new Error('Method not implemented.');
  }

}
