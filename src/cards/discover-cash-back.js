const request = require('request');
const utils = require('./utils');

const DISCOVER_CAL_URL = 'https://www.discover.com/credit-cards/cashback-bonus/data/offers.json?_=1565454657740';

/* A class to get Discovers's 5% cash back information */
class DiscoverCashBackCal {

    /**
     * Creates an array of category dictionaries with associated quarters of cash back and faq info.
     * @public
     * @param {function} callback This will callback to the called function with the return value
     * @return {Object[]} result Array of dictionaries with `quarter`, `category`, and `info` properties
     */
    getCalendar(callback) {
        request(DISCOVER_CAL_URL, {json: true}, (err, resp, body) => {
            if (err) {
                console.error('getCalendar: ', err);
                return callback(err);
            }

            let sanitizeBody = this.sanitizeRawJson(body['quarters']);
            return callback(null, sanitizeBody);
        });
    }

    /**
     * Creates an array of category dictionaries with associated quarters of cash back and faq info.
     * @public
     * @param {Object[]} quarters Array of objects that hold info about each quarter, terms, and metadata
     * @return {Object[]} result Array of dictionaries with `quarter`, `category`, and `terms` properties
     */
    sanitizeRawJson(quarters) {
        let result = [];
        let thisYear = (new Date()).getFullYear();

        for (let quarter of quarters) {
            let date = quarter['quarterLabelStartDate'];
            let title = quarter['title'];
            let terms = quarter['programTerms'];

            if (date.includes(thisYear)) {
                result.push({
                    quarter: utils.getQuarterFromMonths(date),
                    category: title,
                    terms,
                })
            }
        }
        return result;
    }
}

module.exports = DiscoverCashBackCal;