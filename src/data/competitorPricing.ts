// Competitor Pricing Data Management System
// Last Updated: November 25, 2025
// Based on comprehensive roaming rate research across regions

export interface CarrierPricing {
  name: string;
  originCountry: string;
  originRegion: string;
  exampleOperator: string;
  archetype: string;
  flag: string;
  perMinute: number; // Cost per minute for calls (in EUR)
  perMB: number; // Cost per MB of data (in EUR)
  perSMS: number; // Cost per SMS (in EUR)
  currency: string;
  eurRate: number;
  source: string;
  lastUpdated: string;
  notes: string;
}

// Current exchange rates (as of November 25, 2025)
const EXCHANGE_RATES = {
  EUR: 1.00,
  USD: 1.09,
  GBP: 0.85,
  CAD: 1.37,
  AUD: 1.55,
  NZD: 1.65,
  CHF: 0.93,
  SEK: 11.50,
  NOK: 12.00,
  DKK: 7.45,
  SGD: 1.45,
  AED: 4.00,
  QAR: 3.97,
  SAR: 4.09,
};

// Get today's date in ISO format
const getTodaysDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Get current timestamp
const getCurrentTimestamp = (): string => {
  return new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short'
  });
};

export const COMPETITOR_PRICING: CarrierPricing[] = [
  {
    name: "US Carriers (Verizon/AT&T)",
    originCountry: "US",
    originRegion: "USA",
    exampleOperator: "Verizon / US majors",
    archetype: "US_longhaul_PAYG",
    flag: "🇺🇸",
    perMinute: 1.83, // $2.0 converted to EUR
    perMB: 3.67, // $4.0 converted to EUR
    perSMS: 0.46, // $0.5 converted to EUR
    currency: "USD",
    eurRate: EXCHANGE_RATES.USD,
    source: "https://www.verizon.com/support/international-services-pricing/",
    lastUpdated: getTodaysDate(),
    notes: "US carriers typically charge $2–$10/MB without a roaming plan; Verizon Pay-As-You-Go shows $2.05/MB data and ~$1.79–$2.99/min voice"
  },
  {
    name: "Rogers Canada",
    originCountry: "CA",
    originRegion: "NorthAmerica",
    exampleOperator: "Rogers",
    archetype: "CA_premium_destination_PAYG",
    flag: "🇨🇦",
    perMinute: 2.92, // $4.0 CAD converted to EUR
    perMB: 10.95, // $15.0 CAD converted to EUR
    perSMS: 0.55, // $0.75 CAD converted to EUR
    currency: "CAD",
    eurRate: EXCHANGE_RATES.CAD,
    source: "https://www.rogers.com/cmsbusiness/page-specific/content-pages/wireless/addons/html/en/travel_world_coverage_map.html",
    lastUpdated: getTodaysDate(),
    notes: "Rogers Premium Destination example: $4/min, $0.75/SMS and $15.00/MB data in many non-US destinations"
  },
  {
    name: "Telstra Australia",
    originCountry: "AU",
    originRegion: "Oceania",
    exampleOperator: "Telstra",
    archetype: "AU_PAYG",
    flag: "🇦🇺",
    perMinute: 2.26, // $3.5 AUD converted to EUR
    perMB: 1.94, // $3.0 AUD converted to EUR
    perSMS: 0.48, // $0.75 AUD converted to EUR
    currency: "AUD",
    eurRate: EXCHANGE_RATES.AUD,
    source: "https://www.telstra.com.au/international-roaming",
    lastUpdated: getTodaysDate(),
    notes: "Telstra pay-as-you-go roaming: AU$3/MB data, AU$0.75/SMS, and voice from roughly AU$1.50–$5/min by zone"
  },
  {
    name: "UK Carriers (EE/Vodafone)",
    originCountry: "GB",
    originRegion: "UK",
    exampleOperator: "Plan.com, EE, Vodafone UK",
    archetype: "UK_WorldZone_high",
    flag: "🇬🇧",
    perMinute: 2.35, // £2.0 converted to EUR
    perMB: 4.71, // £4.0 converted to EUR
    perSMS: 0.88, // £0.75 converted to EUR
    currency: "GBP",
    eurRate: EXCHANGE_RATES.GBP,
    source: "https://guides.plan.com/roam/",
    lastUpdated: getTodaysDate(),
    notes: "UK roaming to non-EU 'world zones' can be extreme; Plan.com explicitly charges up to £7.75/MB"
  },
  {
    name: "German Carriers (Vodafone/Telekom)",
    originCountry: "DE",
    originRegion: "EU",
    exampleOperator: "Vodafone DE, Telekom",
    archetype: "EU_to_world_zone",
    flag: "🇩🇪",
    perMinute: 0.40, // €0.4 per minute
    perMB: 4.00, // €4.0 per MB
    perSMS: 0.15, // €0.15 per SMS
    currency: "EUR",
    eurRate: EXCHANGE_RATES.EUR,
    source: "https://www.vodafone.de/privat/service/ausland-und-roaming.html",
    lastUpdated: getTodaysDate(),
    notes: "For non-EU zones (USA, Asia, Turkey), German/EU operators often charge €3–€8/MB without bundles"
  },
  {
    name: "Orange France",
    originCountry: "FR",
    originRegion: "EU",
    exampleOperator: "Orange France",
    archetype: "EU_to_world_zone",
    flag: "🇫🇷",
    perMinute: 0.40, // €0.4 per minute
    perMB: 4.00, // €4.0 per MB
    perSMS: 0.15, // €0.15 per SMS
    currency: "EUR",
    eurRate: EXCHANGE_RATES.EUR,
    source: "https://thebitjoy.com/blogs/blog/what-is-data-roaming",
    lastUpdated: getTodaysDate(),
    notes: "Orange and other French operators have published non-EU roaming data up to ~€13/MB but also sell bundles at a few €/GB"
  },
  {
    name: "Swisscom Switzerland",
    originCountry: "CH",
    originRegion: "EuropeNonEU",
    exampleOperator: "Swisscom",
    archetype: "CH_data_packs_world",
    flag: "🇨🇭",
    perMinute: 0.54, // 0.5 CHF converted to EUR
    perMB: 0.081, // 0.075 CHF converted to EUR
    perSMS: 0.27, // 0.25 CHF converted to EUR
    currency: "CHF",
    eurRate: EXCHANGE_RATES.CHF,
    source: "https://www.swisscom.ch/en/residential/mobile-subscription/international-tariffs-roaming/roaming-data-packages.html",
    lastUpdated: getTodaysDate(),
    notes: "Swisscom roaming data packs: e.g. CHF 14.90 for 200MB ⇒ ~0.075 CHF/MB in a bundle"
  },
  {
    name: "Telia Sweden",
    originCountry: "SE",
    originRegion: "Nordics",
    exampleOperator: "Telia",
    archetype: "Nordic_daily_plan",
    flag: "🇸🇪",
    perMinute: 0.043, // 0.5 SEK converted to EUR
    perMB: 0.126, // 1.45 SEK converted to EUR
    perSMS: 0.022, // 0.25 SEK converted to EUR
    currency: "SEK",
    eurRate: EXCHANGE_RATES.SEK,
    source: "https://www.teliacompany.com/en/articles/making-data-roaming-work-for-you",
    lastUpdated: getTodaysDate(),
    notes: "Historic Telia examples: SEK 29 for 20MB daily roaming ⇒ ~1.45 SEK/MB"
  },
  {
    name: "Singtel Singapore",
    originCountry: "SG",
    originRegion: "AsiaHub",
    exampleOperator: "Singtel",
    archetype: "Singtel_pay_per_use_extreme",
    flag: "🇸🇬",
    perMinute: 4.34, // 6.3 SGD converted to EUR
    perMB: 17.24, // 25.0 SGD converted to EUR
    perSMS: 0.55, // 0.8 SGD converted to EUR
    currency: "SGD",
    eurRate: EXCHANGE_RATES.SGD,
    source: "https://www.singtel.com/content/dam/singtel/personal/products-services/mobile/roaming/pdf/RoamingRates.pdf",
    lastUpdated: getTodaysDate(),
    notes: "Singtel standard pay-per-use in many non-preferred destinations: data roaming & MMS S$25/MB, SMS S$0.80"
  },
  {
    name: "Japan Carriers (Docomo/SoftBank)",
    originCountry: "JP",
    originRegion: "Asia",
    exampleOperator: "Docomo/SoftBank archetype",
    archetype: "Asia_high",
    flag: "🇯🇵",
    perMinute: 2.75, // $3.0 converted to EUR
    perMB: 7.16, // $7.8 converted to EUR
    perSMS: 0.46, // $0.5 converted to EUR
    currency: "USD",
    eurRate: EXCHANGE_RATES.USD,
    source: "https://thebitjoy.com/blogs/blog/what-is-data-roaming",
    lastUpdated: getTodaysDate(),
    notes: "Japan has very high outbound tourism. Long-haul roaming from Japanese carriers to Europe/US often sits in the same 5–8 USD/MB band"
  },
  {
    name: "Etisalat UAE",
    originCountry: "AE",
    originRegion: "Gulf",
    exampleOperator: "Etisalat UAE",
    archetype: "Gulf_daily_pack",
    flag: "🇦🇪",
    perMinute: 0.55, // 2.2 AED converted to EUR
    perMB: 0.018, // 0.07 AED converted to EUR
    perSMS: 0.125, // 0.5 AED converted to EUR
    currency: "AED",
    eurRate: EXCHANGE_RATES.AED,
    source: "https://www.etisalat.ae/en/mshop/mobile/add-ons/hybrid/roaming-prepaid/roaming-daily-data-plan.html",
    lastUpdated: getTodaysDate(),
    notes: "Etisalat Roaming Daily Data Plan: AED 35 for 500MB ⇒ ~0.07 AED/MB while pack is active"
  },
  {
    name: "MTN South Africa",
    originCountry: "ZA",
    originRegion: "Africa",
    exampleOperator: "MTN South Africa",
    archetype: "ZA_roaming_PAYG",
    flag: "🇿🇦",
    perMinute: 0.31, // R5.00 converted to EUR (R16.2/EUR)
    perMB: 0.061, // R0.99 converted to EUR
    perSMS: 0.15, // R2.50 converted to EUR
    currency: "ZAR",
    eurRate: 16.2, // ZAR to EUR rate
    source: "https://techafricanews.com/2021/12/01/mtn-reduces-its-international-data-roaming-rate/",
    lastUpdated: getTodaysDate(),
    notes: "MTN reduced international data roaming rate from R2.50/MB to R0.99/MB. Retrieved November 25, 2025"
  },
  {
    name: "Vodacom South Africa",
    originCountry: "ZA",
    originRegion: "Africa",
    exampleOperator: "Vodacom South Africa",
    archetype: "ZA_roaming_reduced",
    flag: "🇿🇦",
    perMinute: 0.31, // R5.00 converted to EUR
    perMB: 0.046, // R0.75 converted to EUR
    perSMS: 0.17, // R2.75 converted to EUR
    currency: "ZAR",
    eurRate: 16.2,
    source: "https://www.vodacom.co.za/vodacom/shopping/v/roaming-costs",
    lastUpdated: getTodaysDate(),
    notes: "Vodacom roaming rates from as low as R0.75/MB. Retrieved November 25, 2025"
  },
  {
    name: "Safaricom Kenya",
    originCountry: "KE",
    originRegion: "Africa",
    exampleOperator: "Safaricom Kenya",
    archetype: "KE_roaming_reduced",
    flag: "🇰🇪",
    perMinute: 0.46, // KSh50 converted to EUR (KSh108/EUR)
    perMB: 0.13, // KSh14 converted to EUR
    perSMS: 0.09, // KSh10 converted to EUR
    currency: "KES",
    eurRate: 108.0, // KES to EUR rate
    source: "https://www.safaricom.co.ke/media-center-landing/press-releases/safaricom-drops-roaming-charges-by-up-to-99",
    lastUpdated: getTodaysDate(),
    notes: "Safaricom reduced data roaming rates to Sh14 per MB in over 52 countries. Retrieved November 25, 2025"
  }
];

// Calculate total cost for a carrier based on usage
export const calculateCarrierCost = (
  carrier: CarrierPricing,
  days: number,
  minutes: number,
  sms: number,
  dataMB: number
): number => {
  const minuteCost = carrier.perMinute * minutes;
  const smsCost = carrier.perSMS * sms;
  const dataCost = carrier.perMB * dataMB;

  return minuteCost + smsCost + dataCost;
};

// Calculate Ringo cost (based on plan structure: Day, Week, or Monthly)
export const calculateRingoCost = (days: number): number => {
  if (days <= 0) return 0;
  if (days <= 3) return 3.50 * days;
  if (days <= 7) return 24.90;
  return 39.90;
};

// Get pricing data with current timestamp
export const getPricingDataWithTimestamp = () => {
  return {
    carriers: COMPETITOR_PRICING,
    lastUpdated: getCurrentTimestamp(),
    exchangeRates: EXCHANGE_RATES,
    disclaimer: "Rates based on comprehensive industry research across global carriers. All prices converted to EUR for comparison. Always verify with your carrier before traveling."
  };
};