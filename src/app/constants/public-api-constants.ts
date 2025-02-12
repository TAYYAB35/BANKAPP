// public-api.ts

import { environment } from '../../environments/environment';

const BENEFICIARY_URL = `${environment.apiUrl}beneficiary/`;
const BILLER_BENEFICIARY_URL = `${environment.apiUrl}billerbeneficiary/`;
const PASSWORD_URL = `${environment.apiUrl}password/`;


export const PublicApi = {
  // Beneficiary
  ADD_BENEF: BENEFICIARY_URL + 'add',
  DELETE_BENEF: BENEFICIARY_URL + 'delete',
  GET_ALL_BENEF: BENEFICIARY_URL + 'getall',
  GET_BENEF_BY_ID: BENEFICIARY_URL + 'getbyid',
  GET_BENEF_ACCOUNT: BENEFICIARY_URL + 'inquiryV2',

  // Biller Beneficiary
  ADD_BILLER_BENEF: BILLER_BENEFICIARY_URL + 'add',
  DELETE_BILLER_BENEF: BILLER_BENEFICIARY_URL + 'delete',
  GET_ALL_BILLER_BENEF: BILLER_BENEFICIARY_URL + 'getall',
  GET_BILLER_BENEF_BY_ID: BILLER_BENEFICIARY_URL + 'getbyid',

  // PASSWORD
  CHANGE_PASSWORD: PASSWORD_URL + 'change',
  FORGOT_PASSWORD: PASSWORD_URL + 'forgot',
  VERIFY_PASSWORD: PASSWORD_URL + 'forgot/verify',
  RESEND_RESET_PASSWORD: PASSWORD_URL + 'forgot/resend_phone_token',

} as const;

// export const productDetails  = 'api/v1/product/';
