import { CustomerProfile } from "./CustomerProfile";

// This is Closed class we should modify this class
// Just imagine like laptop you can add accesory like headphone, speaker, external keyboard but you can't allow to modify the processor
export class InsuerencePremiumCalculator {

  public premiumUserCalculator(customer: CustomerProfile) {
    if (customer.isLoyalCustomer()) {
      return 20
    }
    return 0
  }

}