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
  userType: string | null;
  forgotEmail:string |null;
  pin:string |null;
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

interface SellerInfo {
  _id: string;
  first_name: string;
  last_name: string;
}

export interface ItemType {
  _id: string;
  seller_id: string;
  name: string;
  description: string;
  country: string;
  photo1: string;
  photo2?: string;
  photo3?: string;
  video?: string;
  currency: string;
  price: number;
  category: string;
  available: boolean;
  __v: number;
  iso_code: string;
  createdAt: string;
  seller_info: SellerInfo[];
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

export interface SingleSeller {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country_code: string;
  mobile: string;
  role: string;
  about: string;
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
  createdAt: Date;
  seller_featured_items: SingleSellerFeaturedItem[];
}

export interface SingleSellerFeaturedItem {
  _id: string;
  name: string;
  description: string;
  photo1:string;
  price:number
}


export interface SellerItemType {
  _id: string;
  seller_id: string;
  name: string;
  description: string;
  country: string;
  iso_code: string;
  photo1: string;
  photo2: string;
  photo3: string;
  video: string;
  currency: string;
  price: number;
  category: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface singleSellerWOFeatured{
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country_code: string;
  mobile: string;
  role: string;
  about: string;
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
  createdAt: string;
}

export interface SingleItemType {
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
  iso_code: string;
  createdAt: string;
  convertedPrice: number;
  convertedCurrency: string;
  seller_info: singleSellerWOFeatured[];
  other_seller_items: Partial<ItemType>[];
}

export interface CollectionType {
  _id: string;
  seller_id: string;
  name: string;
  items_id: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coll_list: Partial<SingleItemType>[];
}

export interface CollectorFav {
  _id: string;
  collector_id: string;
  seller_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  seller: Partial <SingleSeller>[];
}