export interface User{
  userId: number;
  userName: string;
  email: string
  emailConfirmed: boolean;
  phone1: string;
  phone1Confirmed: boolean;
  phone2: string;
  phone3: string;
  address: string;
  postalAddress: string;

  voterId: string;
  pollingCentreCode: string;


  avatarUrl: string;

}
