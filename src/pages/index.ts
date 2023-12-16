import HomePage from "./Home";
import LogInPage from "./auth/LogIn";
import SellerRegisterPage from "./auth/SellerRegister";
import AllSellers from "./Allsellers";
import LINKS from "src/utilities/links";
import AllItems from "./AllItems";
import SellerPage from "./seller";
import ItemPage from "./Item";
import CollectorRegisterPage from "./auth/CollectorRegisterPage";
import SelectRegister from "./auth/SelectRegister";
import { Component } from "react";
import SellerProfile from "./sellerProfile";
import AddItemsPage from "./Additems";

export default{
  Auth:{
    Login:{
      Component :LogInPage
    },
    Register:{
      Component :SellerRegisterPage
    },
    CollectorRegister :{
      Component :CollectorRegisterPage
    },
    Selectregister :{
      Component:SelectRegister
    }
  },
  Home:{
    Component :HomePage
  },
  Allsellers:{
    Component :AllSellers,
    path:LINKS.Allsellers
  },
  Allitems:{
    Component :AllItems,
    path:LINKS.Allitems
  },
  seller:{
    Component:SellerPage
  },
  Item:{
    Component:ItemPage
  },
  sellerProfile :{
    Component:SellerProfile
  },
  AddItems:{
    Component :AddItemsPage
  }
}