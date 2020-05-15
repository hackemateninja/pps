import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FedexService {

const Fedex = {
  "bopisEmail": "string",
  "bopisOrder": true,
  "bopisPerson": "string",
  "bopisSignature": {},
  "comments": [
    {
      "agent": "string",
      "comment": "string",
      "creationDate": {
        "time": 0
      },
      "id": "string",
      "owner": "string",
      "version": 0
    }
  ],
  "commerceItems": [
    {
      "catalogId": {},
      "catalogKey": "string",
      "catalogRefId": "string",
      "externalId": {},
      "ffl": true,
      "fulfillmentStore": "string",
      "giftCard": true,
      "giftCardDenomination": 0,
      "gwp": true,
      "id": "string",
      "minimumAge": 0,
      "ppsMessage": "string",
      "priceInfo": {
        "amount": 0,
        "amountIsFinal": true,
        "currencyCode": "string",
        "discountAmount": 0,
        "discounted": true,
        "manualAdjustmentTotal": 0,
        "rawSubtotal": 0,
        "shipping": 0,
        "tax": 0,
        "total": 0
      },
      "productDescription": "string",
      "productDisplayName": "string",
      "productId": "string",
      "quantity": 0,
      "quantityWithFraction": 0,
      "returnItems": [
        {}
      ],
      "returnedQuantity": 0,
      "returnedQuantityWithFraction": 0,
      "shipDate": {
        "time": 0
      },
      "skuAttributes": {
        "Color": "string",
        "Size": "string"
      },
      "stateAsString": "string",
      "trackingNumber": {},
      "upcs": {},
      "vpn": {}
    }
  ],
  "creationTime": 0,
  "cumulatedCommerceItems": [
    {
      "catalogId": {},
      "catalogKey": "string",
      "catalogRefId": "string",
      "externalId": {},
      "ffl": true,
      "fulfillmentStore": "string",
      "giftCard": true,
      "giftCardDenomination": 0,
      "gwp": true,
      "id": "string",
      "minimumAge": 0,
      "ppsMessage": "string",
      "priceInfo": {
        "amount": 0,
        "amountIsFinal": true,
        "currencyCode": "string",
        "discountAmount": 0,
        "discounted": true,
        "manualAdjustmentTotal": 0,
        "rawSubtotal": 0,
        "shipping": 0,
        "tax": 0,
        "total": 0
      },
      "productDescription": "string",
      "productDisplayName": "string",
      "productId": "string",
      "quantity": 0,
      "quantityWithFraction": 0,
      "returnItems": [
        {}
      ],
      "returnedQuantity": 0,
      "returnedQuantityWithFraction": 0,
      "shipDate": {
        "time": 0
      },
      "skuAttributes": {
        "Color": "string",
        "Size": "string"
      },
      "stateAsString": "string",
      "trackingNumber": {},
      "upcs": {},
      "vpn": {}
    }
  ],
  "id": "string",
  "lastModifiedTime": 0,
  "orderNumber": "string",
  "originOfOrder": "string",
  "paymentGroupCount": 0,
  "paymentGroups": [
    {
      "amount": 0,
      "billingAddress": {
        "address1": "string",
        "address2": {},
        "address3": {},
        "city": "string",
        "companyName": {},
        "country": "string",
        "county": {},
        "email": {},
        "faxNumber": {},
        "firstName": "string",
        "id": "string",
        "jobTitle": {},
        "lastName": "string",
        "middleName": {},
        "ownerId": {},
        "phoneNumber": "string",
        "postalCode": "string",
        "prefix": {},
        "state": "string",
        "suffix": {}
      },
      "creditCardNumber": "string",
      "creditCardType": "string",
      "currencyCode": "string",
      "expirationDayOfMonth": {},
      "expirationMonth": "string",
      "expirationYear": "string",
      "orderId": {},
      "paymentId": "string",
      "paymentMethod": "string"
    }
  ],
  "priceInfo": {
    "amount": 0,
    "amountIsFinal": true,
    "currencyCode": "string",
    "discountAmount": 0,
    "discounted": true,
    "manualAdjustmentTotal": 0,
    "rawSubtotal": 0,
    "shipping": 0,
    "tax": 0,
    "total": 0
  },
  "profileId": "string",
  "relationships": [
    {
      "amount": 0,
      "commerceItemExternalId": {},
      "commerceItemId": "string",
      "id": "string",
      "orderId": "string",
      "paymentGroupClass": "string",
      "paymentGroupId": "string",
      "quantity": 0,
      "quantityWithFraction": 0,
      "relationshipType": "string",
      "returnedQuantity": 0,
      "returnedQuantityWithFraction": 0,
      "shippingGroupId": "string"
    }
  ],
  "returnablePPS": true,
  "salesChannel": "string",
  "shippingGroupCount": 0,
  "shippingGroups": [
    {
      "actualShipDate": {},
      "description": "string",
      "handlingInstructions": [
        {}
      ],
      "id": "string",
      "priceInfo": {
        "amount": 0,
        "amountIsFinal": true,
        "currencyCode": "string",
        "discounted": true,
        "rawShipping": 0
      },
      "shipOnDate": {},
      "shippingAddress": {
        "address1": "string",
        "address2": {},
        "address3": {},
        "city": "string",
        "companyName": {},
        "country": "string",
        "county": {},
        "email": {},
        "faxNumber": {},
        "firstName": "string",
        "id": "string",
        "jobTitle": {},
        "lastName": "string",
        "middleName": {},
        "ownerId": {},
        "phoneNumber": "string",
        "postalCode": "string",
        "prefix": {},
        "state": "string",
        "suffix": {}
      },
      "shippingGroupClassType": "string",
      "shippingMethod": "string",
      "specialInstructions": {},
      "state": 0,
      "stateDetail": {},
      "submittedDate": {},
      "trackingNumber": {}
    }
  ],
  "signatureRequired": true,
  "siteId": "string",
  "state": 0,
  "stateAsString": "string",
  "submittedTime": 0,
  "taxPriceInfo": {
    "amount": 0,
    "amountIsFinal": true,
    "cityTax": 0,
    "countryTax": 0,
    "countyTax": 0,
    "currencyCode": "string",
    "discounted": true,
    "districtTax": 0,
    "stateTax": 0
  },
  "totalCommerceItemCount": 0,
  "totalCommerceItemCountWithFraction": 0
}

  constructor() { }
}
