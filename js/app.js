'use strict';

let operationHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomValue(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

/////////// Seattle //////////
let seattle={
    location:'Seattle',
    minCustomer:23,
    maxCustomer:65,
    avgCookiesPerCustomer:6.3,
    // customerPerHour:[],
    cookie:[],
    total:0,

    // updateCustomerPerHour:function(){
    //     for(let i=0;i<operationHours.length;i++){
    //         this.customerPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
    //     }
    // },

    updateCookiesPerhour:function(){

        for(let i=0;i<operationHours.length;i++){
            this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.ceil(this.avgCookiesPerCustomer));
            this.total= this.total+this.cookie[i];
        }
        this.cookie[this.cookie.length]=this.total;
    },

    render:function(){
        let mainElement=document.getElementById('mainElement');
        let paragraphEl=document.createElement('p');
        mainElement.appendChild(paragraphEl);
        paragraphEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainElement.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length-1;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=operationHours[i]+" : "+this.cookie[i]+" cookies";
        }
        liEl=document.createElement('li');
        ulLi.appendChild(liEl);
        liEl.textContent='Total : ' + this.total + 'cookies';

        let hrEl=document.createElement('hr');
        mainElement.appendChild(hrEl);
    }
}

//seattle.updateCustomerPerHour();
seattle.updateCookiesPerhour();
seattle.render();

/////////// Tokyo //////////
let tokyo={
    location:'Tokyo',
    minCustomer:3,
    maxCustomer:24,
    avgCookiesPerCustomer:1.2,
    customerPerHour:[],
    cookie:[],
    total:0,

    updateCustomerPerHour:function(){
        for(let i=0;i<operationHours.length;i++){
            this.customerPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
        }
    },

    updateCookiesPerhour:function(){

        for(let i=0;i<operationHours.length;i++){
            this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.floor(this.avgCookiesPerCustomer));
            this.total= this.total+this.cookie[i];
        }
        this.cookie[this.cookie.length]=this.total;
    },

    render:function(){
        let mainElement=document.getElementById('mainElement');
        let paragraphEl=document.createElement('p');
        mainElement.appendChild(paragraphEl);
        paragraphEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainElement.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length-1;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=operationHours[i]+" : "+this.cookie[i]+" cookies";
        }
        liEl=document.createElement('li');
        ulLi.appendChild(liEl);
        liEl.textContent='Total : ' + this.total + 'cookies';

        let hrEl=document.createElement('hr');
        mainElement.appendChild(hrEl);
    }
}

tokyo.updateCustomerPerHour();
tokyo.updateCookiesPerhour();
tokyo.render();

/////////// Dubai //////////
let dubai={
    location:'Dubai',
    minCustomer:11,
    maxCustomer:38,
    avgCookiesPerCustomer:3.7,
    customerPerHour:[],
    cookie:[],
    total:0,

    updateCustomerPerHour:function(){
        for(let i=0;i<operationHours.length;i++){
            this.customerPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
        }
    },

    updateCookiesPerhour:function(){

        for(let i=0;i<operationHours.length;i++){
            this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.floor(this.avgCookiesPerCustomer));
            this.total= this.total+this.cookie[i];
        }
        this.cookie[this.cookie.length]=this.total;
    },

    render:function(){
        let mainElement=document.getElementById('mainElement');
        let paragraphEl=document.createElement('p');
        mainElement.appendChild(paragraphEl);
        paragraphEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainElement.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length-1;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=operationHours[i]+" : "+this.cookie[i]+" cookies";
        }
        liEl=document.createElement('li');
        ulLi.appendChild(liEl);
        liEl.textContent='Total : ' + this.total + 'cookies';

        let hrEl=document.createElement('hr');
        mainElement.appendChild(hrEl);
    }
}

dubai.updateCustomerPerHour();
dubai.updateCookiesPerhour();
dubai.render();

/////////// Paris //////////
let paris={
    location:'Paris',
    minCustomer:20,
    maxCustomer:38,
    avgCookiesPerCustomer:2.3,
    customerPerHour:[],
    cookie:[],
    total:0,

    updateCustomerPerHour:function(){
        for(let i=0;i<operationHours.length;i++){
            this.customerPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
        }
    },

    updateCookiesPerhour:function(){

        for(let i=0;i<operationHours.length;i++){
            this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.floor(this.avgCookiesPerCustomer));
            this.total= this.total+this.cookie[i];
        }
        this.cookie[this.cookie.length]=this.total;
    },

    render:function(){
        let mainElement=document.getElementById('mainElement');
        let paragraphEl=document.createElement('p');
        mainElement.appendChild(paragraphEl);
        paragraphEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainElement.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length-1;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=operationHours[i]+" : "+this.cookie[i]+" cookies";
        }
        liEl=document.createElement('li');
        ulLi.appendChild(liEl);
        liEl.textContent='Total : ' + this.total + 'cookies';

        let hrEl=document.createElement('hr');
        mainElement.appendChild(hrEl);
    }
}

paris.updateCustomerPerHour();
paris.updateCookiesPerhour();
paris.render();

/////////// Lima //////////
let lima={
    location:'Lima',
    minCustomer:2,
    maxCustomer:16,
    avgCookiesPerCustomer:4.6,
    customerPerHour:[],
    cookie:[],
    total:0,

    updateCustomerPerHour:function(){
        for(let i=0;i<operationHours.length;i++){
            this.customerPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
        }
    },

    updateCookiesPerhour:function(){

        for(let i=0;i<operationHours.length;i++){
            this.cookie.push(randomValue(this.minCustomer,this.maxCustomer)*Math.floor(this.avgCookiesPerCustomer));
            this.total= this.total+this.cookie[i];
        }
        this.cookie[this.cookie.length]=this.total;
    },

    render:function(){
        let mainElement=document.getElementById('mainElement');
        let paragraphEl=document.createElement('p');
        mainElement.appendChild(paragraphEl);
        paragraphEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainElement.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length-1;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=operationHours[i]+" : "+this.cookie[i]+" cookies";
        }
        liEl=document.createElement('li');
        ulLi.appendChild(liEl);
        liEl.textContent='Total : ' + this.total + 'cookies';

        let hrEl=document.createElement('hr');
        mainElement.appendChild(hrEl);
    }
}

lima.updateCustomerPerHour();
lima.updateCookiesPerhour();
lima.render();