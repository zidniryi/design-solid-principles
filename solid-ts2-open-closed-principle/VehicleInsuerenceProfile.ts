import { CustomerProfile } from "./CustomerProfile";

// You should modify here, the extentsion, when you add new type insurence usertype
export class VehicleInsuerenceProfile implements CustomerProfile {
  public isLoyalCustomer(): boolean {
    return true
  }
}