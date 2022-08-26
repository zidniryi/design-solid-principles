import { InsuerencePremiumCalculator } from "./InsuerencePremiumCalculator";
import { VehicleInsuerenceProfile } from "./VehicleInsuerenceProfile";

const vechileInsuerenceProfile = new VehicleInsuerenceProfile()

vechileInsuerenceProfile.isLoyalCustomer()
const insuerencePremiumCalculator = new InsuerencePremiumCalculator()

// We called it here
console.log(insuerencePremiumCalculator.premiumUserCalculator(vechileInsuerenceProfile))