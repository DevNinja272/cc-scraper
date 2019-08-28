# cc-scraper v?
The [cc-scraper](https://github.com/JinwookKim/cc-scraper) library is used as an npm module or [Node.js](https://nodejs.org/en/) module.


## installation
Using npm:
```javascript
npm i -s cc-scraper
```

In Node.js:
```javascript
// Load the cc-scraper library
const cards = require('cc-scraper');

// Get Chase's 5% Cash Back Calendar information
cards.getChaseCashBackCal((error, result) => {
    console.log('result = ', result);
});
```

Output (something similar to):
```javascript
result = [ { quarter: 1,
    category: 'Gas Stations',
    terms:
     'Merchants in the Gas Stations category sell automotive gasoline that can be paid for either at the pump or inside the station, and may or may not sell other goods or services at their location. Please note that some merchants that do not specialize in selling automotive gasoline are not included in this category, for example, truck stops, boat marinas, oil and propane distributors, and home heating companies.' },
  { quarter: 1,
    category: 'Tolls',
    terms:
     'Merchants in the Tolls category collect fees associated with toll roads, highways, and bridges. Note that purchases made during the quarter to replenish your electronic toll collection account will qualify.' },
  { quarter: 1,
    category: 'Drugstores',
    terms:
     'Merchants in the Drugstores category specialize in selling prescription drugs and over-the-counter medicines, supplements and various health-related items. These merchants may also sell cosmetics, toiletries, greeting cards, and various household items such as cleaning supplies and packaged foods and drinks. Please note that some merchants that sell a wide variety of goods including these items, and which may contain an onsite pharmacy, for example, warehouse clubs, discount stores, or grocery stores, are not included in this category.' },
  { quarter: 2,
    category: 'Grocery Stores',
    terms:
     'Merchants in the Chase Freedom Grocery stores category that does not include Walmart® and Target® purchases, includes supermarkets as well as smaller grocery stores. Please note that some merchants that sell grocery items are not included in this category; for example, larger stores that sell a wide variety of goods, such as Target®, Walmart®, discount stores, warehouse clubs, and some smaller merchants such as drugstores and merchants that specialize in only a few grocery items. In addition, please note that purchases made at gas stations operated by merchants who also operate grocery stores are not included in this category.' },
  { quarter: 2,
    category: 'Home Improvement Stores',
    terms:
     'Merchants in the home improvement stores category specialize in selling a variety of home improvement supplies, from larger home improvement stores to smaller hardware stores. Please note that some larger merchants that sell a wide variety of general goods which may include home improvement supplies, for example, warehouse clubs, discount stores, or grocery stores, are not included in this category. Also, merchants that specialize in home furnishings, garden and landscaping supplies are not included.' },
  { quarter: 3,
    category: 'Gas Stations',
    terms:
     'Merchants in the Gas Stations category sell automotive gasoline that can be paid for either at the pump or inside the station, and may or may not sell other goods or services at their location. Please note that some merchants that do not specialize in selling automotive gasoline are not included in this category, for example, truck stops, boat marinas, oil and propane distributors, and home heating companies.' },
  { quarter: 3,
    category: 'Select Streaming Services',
    terms:
     'Merchants in the Select Streaming Services category specialize in delivering music and video content over the internet.  Only subscriptions paid for or purchases made with the following select merchants will qualify for this offer: Netflix, Hulu, Sling, Vudu, FuboTV, Apple Music, SiriusXM, Pandora, Spotify.' } ]
```
Quarter 1: January - March  
Quarter 2: April - June  
Quarter 3: July - September  
Quarter 4: October - December

There will be occasions where some quarters are missing. For example, in the output above is missing `quarter 4`. That is because on their website calendar, they haven't finalized quarter 4 categories that will attribute to the 5% cash back (at the time of this writing). Therefore, my code will neglect that quarter.   