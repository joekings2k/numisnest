export interface Seller {
  flag: string;
  img: string;
  name: string;
  selling: string;
}
export interface item {
  flag: string;
  img: string;
  name: string;
  itemName: string;
  dateCreated:string;
  amount:string;
}
export interface ContextDataType {
  token: string | null;
  user: any;
}

export interface SellerType {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country_code: string;
  mobile: string;
  role: string;
  delivery_option: string;
  country: string;
  auth_code: number;
  available: boolean;
  level: string;
  verify: boolean;
  approved: boolean;
  suspended: boolean;
  __v: number;
  photo: string;
  iso_code: string;
}

export interface ItemType {
  _id: string;
  seller_id: string;
  name: string;
  description: string;
  country: string;
  photo1: string;
  photo2: string;
  photo3: string;
  video: string;
  currency: string;
  price: number;
  category: string;
  available: boolean;
  __v: number;
  iso_code: string;
  convertedPrice: number;
  convertedCurrency: string;
}

export interface FormValueRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  cpassword: string;
  country_code: string;
  mobile: string;
  about: string;
  delivery_option:string;
  country: string;
}

export interface SellerProfileType {
  about?: string;
  approved: boolean;
  available: boolean;
  country: string;
  country_code: string;
  createdAt: Date;
  delivery_option?: string;
  email: string;
  first_name: string;
  iso_code: string;
  last_name: string;
  level: string;
  mobile: string;
  photo: string;
  role: string;
  suspended: boolean;
  verify: boolean;
  _id: string;
}
