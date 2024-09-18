/**
 * Calendar click notification 
 */

const wheelItemsJan = document.querySelectorAll('.wheel-weeks .january .wheel-item');

const wheelItemsFeb = document.querySelectorAll('.wheel-weeks .february .wheel-item');

const wheelItemsMarch = document.querySelectorAll('.wheel-weeks .march .wheel-item');

const wheelItemsApril = document.querySelectorAll('.wheel-weeks .april .wheel-item');

const wheelItemsMay = document.querySelectorAll('.wheel-weeks .may .wheel-item');

const wheelItemsJune = document.querySelectorAll('.wheel-weeks .june .wheel-item');

const getWheelItems = (varName, month) => {
    varName.forEach( (item) => {
        item.addEventListener('click', (e) => {
            console.log(`${month} ${e.target.textContent} has been clicked`);
        });
    });
}

getWheelItems(wheelItemsJan, 'January');
getWheelItems(wheelItemsFeb, 'February');
getWheelItems(wheelItemsMarch, 'March');
getWheelItems(wheelItemsApril, 'April');
getWheelItems(wheelItemsMay, 'May');
getWheelItems(wheelItemsJune, 'June');