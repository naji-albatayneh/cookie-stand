'use strict';

let operationHours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let container = document.getElementById('container');
let table = document.createElement('table');
let columnTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function randomValue(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

///////////Constructor//////////
function Location(shopLocation, minCustomer, maxCustomer, avgCookiesPerCustomer){
    this.location = shopLocation;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookie=new Array();
    this.total=0;
}
///////////Prototype Object///////////
Location.prototype.updateCookiesPerhour = function(){
    for(let i=0;i<operationHours.length;i++){
        this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.ceil(this.avgCookiesPerCustomer));
        this.total = this.total+this.cookie[i];
    }
    this.cookie[this.cookie.length]=this.total;
}
//Calculates the total sum in each column
Location.prototype.totals = function(){
    for(let i=0;i<this.cookie.length;i++){
        columnTotal[i] = columnTotal[i] + this.cookie[i];
        console.log('total ( ' +i+ ' ): ' + columnTotal[i] + ' cookie: ' + this.cookie[i]);
    }console.log(this.cookie);
}

///////////Reandering Table Header//////////
Location.prototype.tableHeaderRender = function(){
        container.appendChild(table);
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let th1El = document.createElement('th');
        tr.appendChild(th1El);
        th1El.textContent = 'Location / Operating Hours';
        for(let i = 0; i<operationHours.length; i++){
            let thEl = document.createElement('th');
            tr.appendChild(thEl);
            thEl.textContent = operationHours[i];
        }
        let thEl = document.createElement('th');
        tr.appendChild(thEl);
        thEl.textContent = 'Daily Location Total';

}

///////////Reandering Table Body//////////
Location.prototype.tableBodyRender = function(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td1El = document.createElement('td');
    tr.appendChild(td1El);
    td1El.textContent = this.location;
    for(let i = 0; i<this.cookie.length; i++){
        let tdEl = document.createElement('td');
        tr.appendChild(tdEl);
        tdEl.textContent = this.cookie[i];
    }
}

///////////Reandering Table Footer//////////
Location.prototype.tableFooterRender = function(){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td1El = document.createElement('td');
    tr.appendChild(td1El);
    td1El.textContent = 'Totals';
    for(let i = 0; i<columnTotal.length; i++){
        let tdEl = document.createElement('td');
        tr.appendChild(tdEl);
        tdEl.textContent = columnTotal[i];
    }
}

///////////Greate Object//////////
let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.updateCookiesPerhour();
seattle.totals();
seattle.tableHeaderRender();
seattle.tableBodyRender();


let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.updateCookiesPerhour();
tokyo.totals();
tokyo.tableBodyRender();

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.updateCookiesPerhour();
dubai.totals();
dubai.tableBodyRender();

let paris = new Location('Paris', 20, 38, 2.3);
paris.updateCookiesPerhour();
paris.totals();
paris.tableBodyRender();


let lima = new Location('Lima', 2, 16, 4.6);
lima.updateCookiesPerhour();
lima.totals();
lima.tableBodyRender();
lima.tableFooterRender();

