window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            alert('Reload this page and enable access to use this dapp!');
        }
        
        startDapp();
        
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        startDapp();
    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

let el = function (id) {
    return document.querySelector(id);
};

var strongHandsManagerABI = ([{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "bnbReinvested", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensMinted", "type": "uint256" } ], "name": "onReinvestment", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "incomingBNB", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensMinted", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "referredBy", "type": "address" } ], "name": "onTokenPurchase", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokensBurned", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "bnbEarned", "type": "uint256" } ], "name": "onTokenSell", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "customerAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "bnbWithdrawn", "type": "uint256" } ], "name": "onWithdraw", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "_customerAddress", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_referredBy", "type": "address" } ], "name": "buy", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "buyPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokensToSell", "type": "uint256" } ], "name": "calculateCHKReceived", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_chkToSpend", "type": "uint256" } ], "name": "calculateTokensReceived", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "deployer", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_customerAddress", "type": "address" }, { "internalType": "bool", "name": "_includeReferralBonus", "type": "bool" } ], "name": "dividendsOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "exit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_includeReferralBonus", "type": "bool" } ], "name": "myDividends", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "myTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "myTotalReferralEarnings", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "myTotalReferrals", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_player", "type": "address" } ], "name": "playerStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reinvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_amountOfTokens", "type": "uint256" } ], "name": "sell", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "sellPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalCHKBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_user", "type": "address" } ], "name": "totalReferralEarningsOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_user", "type": "address" } ], "name": "totalReferralsOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_toAddress", "type": "address" }, { "internalType": "uint256", "name": "_amountOfTokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]);
var gauntletABI = ([{ "constant": true, "inputs": [], "name": "creationDate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawDividends", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "buyWithBalance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_howManyDays", "type": "uint256" } ], "name": "extendLock", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "unlockAfterNDays", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isLocked", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_toAddress", "type": "address" }, { "name": "_amountOfTokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "developer", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "lockedUntil", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "dividendsOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_unlockAfterNDays", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }]);

let strongHandsManagerAddress = '0x7f922e7313ac76bb3eD4B32Fd82B1aC482704984'; // Mainnet
// let strongHandsManagerAddress = '0xf5E4636000aBb8002d63ac228F82a67e18a4A4e7'; // Testnet

let strongHandsManagerContract = web3.eth.contract(strongHandsManagerABI);
let strongHandsManagerInstance = strongHandsManagerContract.at(strongHandsManagerAddress);

strongHandContract = web3.eth.contract(gauntletABI);
let myStrongHandInstance;

function startDapp() {
    setInterval(myStrongHand, 3000);
}

function myStrongHand() {
    strongHandsManagerInstance.isGodlyChad((error, isGodlyChad) => {
        if (isGodlyChad) {
            
            $("#setupPanel").hide();
            $("#myDepositPanel").show();
            $('#myTimePanel').show();
            $('#myControlsPanel').show();

            strongHandsManagerInstance.myGauntlet((error, myStrongHandAddress) => {
                el('#address').innerHTML = myStrongHandAddress;

                myStrongHandInstance = strongHandContract.at(myStrongHandAddress);
                
                myStrongHandInstance.balanceOf((error, myGTTBalance) => {
                    el('#myb1vsbalance').innerHTML = web3.fromWei(myGTTBalance, 'ether').toFixed(4);
                });
                
                myStrongHandInstance.dividendsOf((error, myDividends) => {
                    el('#mydividends').innerHTML = web3.fromWei(myDividends, 'ether').toFixed(4);
                });
                
                myStrongHandInstance.isLocked((error, isLocked) => {
                    if (isLocked) {
                        myStrongHandInstance.lockedUntil((error, lockedUntil) => {
                            var _until = new Date(lockedUntil * 1000);
                            el('#mystatus').innerHTML = '<b class="text-danger">LOCKED</b>';
                            el('#lockedUntil').innerHTML = (_until.getDate() + "/" + (_until.getMonth() + 1) + "/" + _until.getFullYear());
                        });
                    } else {
                        $('#mySellPanel').show();
                    }
                });

                myStrongHandInstance.unlockAfterNDays((error, unlockAfterNDays) => {
                    el('#daysUntil').innerHTML = unlockAfterNDays;
                });
                myStrongHandInstance.creationDate((error, creationDate) => {
                    var _date = new Date(creationDate * 1000);
                    el('#created').innerHTML = (_date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear());
                });
            });

        } else {
            el('#address').innerHTML = ("Create a Gauntlet Today!");
            
            el('#myb1vsbalance').innerHTML = ("- GTT");
            el('#mydividends').innerHTML = ("- CHK");
            
            el('#mystatus').innerHTML = ('<strong class="text-warning">NO GAUNTLET</b>');
            el('#lockedUntil').innerHTML = ('--/--/----');
            el('#daysUntil').innerHTML = ('-');
            el('#created').innerHTML = ('-');
            
            $("#myDepositPanel").hide();
            $('#myTimePanel').hide();
            $('#myControlsPanel').hide();
            $('#mySellPanel').hide();
            
            $("#setupPanel").show();
        }
    });
}

function getStrong() {
    strongHandsManagerInstance.create(el('#locktime').value, (error, result) => {
        if (!error) {
            alertify.success("Creating Gauntlet, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}

function buyB1VS() {
    myStrongHandInstance.buy({
        value: web3.toWei(el('#buyamount').value, 'ether')
    }, (error, result) => {
        if (!error) {
            alertify.success("Buying GTT Shares, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}

function withdrawDividends() {
    myStrongHandInstance.withdrawDividends((error, result) => {
        if (!error) {
            alertify.success("Withdrawing Dividends, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}

function reinvestDividends() {
    myStrongHandInstance.reinvest((error, result) => {
        if (!error) {
            alertify.success("Reinvesting GTT Shares, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}

function extendLock() {
    myStrongHandInstance.extendLock(el('#extendlocktime').value, (error, result) => {
        if (!error) {
            alertify.success("Extending Lock, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}

function sell() {
    myStrongHandInstance.sell(web3.toWei(el('#sellamount').value, 'ether'), (error, result) => {
        if (!error) {
            alertify.success("Selling GTT Shares, please wait...");
        } else {
            alertify.error("Failed - Try again or check Tx...")
        }
    });
}
