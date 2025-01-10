// public-api.ts

import { environment } from '../../environments/environment';

const ACCOUNT_URL = `${environment.apiUrl}Account/`;
const PAYMENT_URL = `${environment.apiUrl}TapPayment/`;
const INTEGRATION_URL = `${environment.apiUrl}Integrations/`;
const MARKETING_URL = `${environment.apiUrl}Marketings/`;
const CAMPAIGN_URL = `${environment.apiUrl}Campaigns/`;
const REFERAL_URL = `${environment.apiUrl}Refral/`;

export const PublicApi = {
  LOGIN: ACCOUNT_URL + 'login',
  REGISTER: ACCOUNT_URL + 'register',
  LOGOUT: ACCOUNT_URL + 'logout',
  FORGOT_PASSWORD: ACCOUNT_URL + 'ForgotPassword',
  RESET_PASSWORD: ACCOUNT_URL + 'ResetPassword',
  RESEND_EMAIL: ACCOUNT_URL + 'ResendEmail',
  UPLOAD_FILE: ACCOUNT_URL + 'Upload',
  VIDEO_UPLOAD_FILE: ACCOUNT_URL + 'UploadVideo',
  VERIFY_EMAIL_EXIST: ACCOUNT_URL + 'VerifyEmailExists',
  GET_PROFILE_INFO_BYID: ACCOUNT_URL + 'GetProfileInfoById',
  CHANGE_PASSWORD: ACCOUNT_URL + 'ChangePassword',
  CONFIRM_EMAIL: ACCOUNT_URL + 'ConfirmEmail',
  EMAIL_CONFIRMATION: ACCOUNT_URL + 'EmailConfirmation',
  PHONE_NUMBER_SEND: ACCOUNT_URL + 'PhoneNumberSend',
  PHONE_NUMBER_CONFIRMATION: ACCOUNT_URL + 'PhoneNumberConfirmation',
  GET_COMPANY_INFO: ACCOUNT_URL + 'GetCompanyInfo',
  UPDATE_COMPANY_INFO: ACCOUNT_URL + 'UpdateCompanyInfo',
  UPDATE_PROFILE: ACCOUNT_URL + 'UpdateProfile',
  GET_USER_ROLE: ACCOUNT_URL + 'GetUserRole',
  CREATE_PAYMENT_AUTHORIZATION: PAYMENT_URL + 'CreateAuthorize',
  VERIFY_PAYMENT_AUTHORIZATION: PAYMENT_URL + 'RetrieveAuthorize',
  CREATE_PAYMENT_CHARGES: PAYMENT_URL + 'CreateCharge',
  VERIFY_PAYMENT_CHARGES: PAYMENT_URL + 'RetrieveCharge',
  GET_WALLET: PAYMENT_URL + 'GetWallet',
  GET_TRANSACTION_HISTORY: PAYMENT_URL + 'GetTransactionHistory',
  GET_REFER_EARN: PAYMENT_URL + 'GetReferEarn',
  GET_INTEGRATION: INTEGRATION_URL + 'GetIntegration',
  GET_INTEGRATION_BY_USER: INTEGRATION_URL + 'GetIntegrationByUser',
  GET_INTEGRATION_BY_ID: INTEGRATION_URL + 'GetIntegrationById',
  UPDATE_INTEGRATION: INTEGRATION_URL + 'UpdateIntegration',
  CREATE_INTEGRATION: INTEGRATION_URL + 'CreateIntegration',
  DELETE_INTEGRATION: INTEGRATION_URL + 'DeleteIntegration',
  POST_OTP: ACCOUNT_URL + 'UpdateEmail',

  // Marketing
  GET_MARKETING: MARKETING_URL + 'GetMarketing',
  GET_MARKETING_BY_USER: MARKETING_URL + 'GetMarketingByUser',
  GET_MARKETING_BY_ID: MARKETING_URL + 'GetMarketingById',
  UPDATE_MARKETING: MARKETING_URL + 'UpdateMarketing',
  CREATE_MARKETING: MARKETING_URL + 'CreateMarketing',
  DELETE_MARKETING: MARKETING_URL + 'DeleteMarketing',

  // Compaign
  CREATE_CAMPAIGN: CAMPAIGN_URL + 'CreateCampaign',
  CREATE_BUDGET: CAMPAIGN_URL + 'CreateUpdateBudget',
  CREATE_AUDIENCE: CAMPAIGN_URL + 'CreateUpdateAudience',
  CREATE_CONTENT: CAMPAIGN_URL + 'CreateUpdateContent',
  GET_COMPAIGN_BY_ID: CAMPAIGN_URL + 'GetCampaignById',
  GET_COMPAIGN_DETAILS: CAMPAIGN_URL + 'GetCampaignDetails',
  CAMPAIGN_START: CAMPAIGN_URL + 'CampaignStart',
  GET_COMPAIGN: CAMPAIGN_URL + 'GetCampaign',
  UPDATE_CAMPAIGN: CAMPAIGN_URL + 'UpdateCampaign',
  GET_BUDGET_BY_ID: CAMPAIGN_URL + 'GetCampaignBudgetById',
  GET_AUDIENCE_BY_ID: CAMPAIGN_URL + 'GetCampaignAudienceById',
  GET_CONTENT_BY_ID: CAMPAIGN_URL + 'GetCampaignContentById',
  CAMPAIGN_STATUS: CAMPAIGN_URL + 'CampaignStatus',
  
  // Referal
  GET_REFRAL_BY_ID : REFERAL_URL + 'GetRefralSByRefranceId',
  UPDATE_REFERAL_BY_USER : REFERAL_URL + 'UpdateRefralByUser',

} as const;

// export const productDetails  = 'api/v1/product/';
