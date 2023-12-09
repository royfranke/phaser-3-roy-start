import MONEY from "../reference/money.js";

/**
 * 	Manages what is in the coinpurse
 *	
 */
export default class CoinpurseService {
    scene;
    total;


    constructor(scene) {
        this.scene = scene;
        this.total = 0;
        this.coinRef = MONEY.COIN;

        this.contents = {
            COIN: {
                PENNY:0,
                NICKEL:0,
                DIME:0,
                QUARTER:4
            },
            PAPER: {
                ONE:0,
                TWO:0,
                FIVE:0,
                TEN:0,
                TWENTY:0,
                FIFTY:0,
                HUNDRED:0,
            },
        };

        this.total = 0;
    }

    availableCoins (coin_amount_array) {
        let available = { ...this.contents.COIN };
        const coinRef = this.coinRef;
        let valid = true;
        for (const el of coin_amount_array) {
            let coin = coinRef[el];
            if (available[coin] > 0) {
                available[coin]--;
            }
            else {
                valid = false;
                break;
            }
          }
        return valid;
    }
    

    availableAmount (amount) {
        return this.total - amount >= 0;
    }

    getMissing (coin_amount_array) {
        let available = { ...this.contents.COIN };
        const coinRef = this.coinRef;
        let missing = [];
        for (const el of coin_amount_array) {
            let coin = coinRef[el];
            if (available[coin] > 0) {
                available[coin]--;
            }
            else {
                missing.push(coin);
            }
          }
        return missing;
    }

    insertCoins (coin_amount_array) {
        if (this.availableCoins(coin_amount_array)) {
            this.removeCoins(coin_amount_array);
            return true;
        }
        else {
            let missing = this.getMissing(coin_amount_array);

            this.scene.ui.tellBrain('I need a '+missing[0],2000,'missing');
            return false;
        }
    }

    removeCoins (coin_amount_array) {
        let spent = 0;
        coin_amount_array.forEach(element => {
            this.removeCoin(element);
            spent = parseInt(element + spent);
        });
        let spent_formatted = this.scene.ui.formatMoney(spent);
        this.popCoin(`${spent_formatted}`,'negative');
        this.updateTotal();
    }

    removeCoin (coin_amount) {
        let coin = this.coinRef[coin_amount];
        this.contents.COIN[coin]--;
        //this.updateTotal();
    }

    addCoin (coin_amount) {
        let coin = this.coinRef[coin_amount];
        this.contents.COIN[coin]++;
        let amount_string = coin_amount;
        this.popCoin(`${coin_amount}¢`,'positive');
        this.updateTotal();
    }
 
    popCoin (amount_string,status='default') {
        this.scene.ui.tellCoinpurse(amount_string,750,status);
        this.scene.ui.coinPurse.icon.setFrame('COINPURSE_pop');
        setTimeout(() => {
            this.scene.ui.coinPurse.icon.setFrame('COINPURSE_closed');
        }, 250);
    }

    updateTotal () {
        this.total = 0;
          for (const [key, value] of Object.entries(this.contents.COIN)) {
            //console.log(`${key}: ${value}`);
            this.total += value*this.coinRef[key];
          }
        return this.total;
    }

    
}