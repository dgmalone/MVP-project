# MVP-project

## Overview
This repository houses an application that displays information about debt issued by state and local government agencies in California from CDIAC via a Socrata API.

## Description
Users can use searches to filter information down. See below for the current list of filterable columns.

```
filters: {
    FA: String,
    Counsel: String,
    SaleDateStart: String,
    SaleDateEnd: String,
    IssuerType: String,
    DebtType: String,
    RefundAmtMin: String,
    RefundAmtMax: String,
    SaleType: String,
    Issuer: String
  }
```
The filters are used to make calls to the CDA All Data API from Socrata. Additional information about the API can be found [here](https://dev.socrata.com/foundry/data.debtwatch.treasurer.ca.gov/yng6-vaxy). The filters can be saved to a given users list. Users can update or delete their searches. Search information is stored in MongoDB.

## Installation
Fork and clone this repository. 
Then run 
```
npm install 
```
Development:
To run in development run the following commands.
```
npm run build-dev
```
```
npm start
```

Production: 
To run in production run the following commands.
```
npm run build-prod
```
```
npm run start-prod
```
