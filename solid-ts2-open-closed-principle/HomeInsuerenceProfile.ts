import { CustomerProfile } from "./CustomerProfile";

// You should modify here, the extentsion, when you add new type insurence usertype
export class HomeInsuerenceProfile implements CustomerProfile {
  public isLoyalCustomer() {
    return false
  }
}