let resultStatus;

let message = {
    hotelRegister: "Hotel Registered Successfully",
    hotelExist: "Hotel Name Already Exist",
    hotelEmailExists: "Hotel Email Already Exits",
    itemAdded: "Item Added Successfully",
    itemExist: "Item Already Exist"
};

let hotels = {};

let taxes = {
    sgst : 5.5,
    cgst : 4.7
};


function addHotel(name,phone,email,location,taxes){
    if(Object.keys(hotels).length < 1){
        let hotel = {
            hotelName : name,
            hotelPhone : phone,
            hotelEmail : email,
            hotelLocation : location,
            hotelTaxes : taxes,
            menuCard : {}
        };

        let hotelsId = Object.keys(hotels).length+1;
        hotels[hotelsId] = hotel;

        const replyMessage = `${name}, ${message.hotelRegister}`;
        return replyMessage;
    }
    else{
        let hotelsKeyArray = Object.keys(hotels)
        for(let i = 0; i < hotelsKeyArray.length; i++){
            if(name == hotels[hotelsKeyArray[i]].hotelName){
                if(email == hotels[hotelsKeyArray[i]].hotelEmail){
                    const replyMessage = `${name}, ${message.hotelEmailExists}`;
                    return replyMessage;
                }
                const replyMessage = `${name}, ${message.hotelExists}`;

                return replyMessage;
            }

            else{
                let hotel = {
                    hotelName : name,
                    hotelPhone : phone,
                    hotelEmail : email,
                    hotelLocation : location,
                    hotelTaxes : taxes,
                    menuCard : {}
                };

                let hotelsId = Object.keys(hotels).length + 1;
                hotels[hotelsId] = hotel;

                const replyMessage = `${name}, ${message.hotelRegister}`;

                return replyMessage;
            }
        }
    }
}

addHotel("Maharaja",9673524580,"maharaja12@gmail.com","Sangamner",taxes);
addHotel("Maharaja",9673524580,"maharaja12@gmail.com","Sangamner",taxes);
addHotel("New",9078657809,"new12@gmail.com","Pune",taxes);

function addMenuCard(hotelId, menuItem){
    let status = true;
    let itemId = Object.keys(hotels[hotelId].menuCard).length + 1;
    if(Object.keys(hotels[hotelId].menuCard).length < 1){
        hotels[hotelId].menuCard[itemId] = menuItem;

        const replyMessage = `${menuItem.name}, ${message.itemAdded}`;
        return replyMessage;
    }

    else{
       for(let i = 1; i <= Object.keys(hotels[hotelId].menuCard).length;i++){
        if(menuItem.name == hotels[hotelId].menuCard[i].name){
            status = false;
            return `${menuItem.name}, ${message.itemExist}`;
        }
       }

       if(status === true){
        let itemId = Object.keys(hotels[hotelId].menuCard).length + 1;
        hotels[hotelId].menuCard[itemId] = menuItem;

        const replyMessage =`${menuItem.name}, ${message.itemAdded}`;

        return replyMessage;
       }
    }
   
}

let menuItem1 = {
    name: "Paneer",
    madeFrom: "Milk",
    price: 120
};
let menuItem2 = {
    name: "Achar",
    madeFrom: "Mango",
    price: 20
};
let menuItem3 = {
    name: "Dal",
    madeFrom: "Lush Green",
    price: 40
};
let menuItem4 = {
    name: "Rice",
    madeFrom: "Rice",
    price: 30
};
let menuItem5 = {
    name: "Roti",
    madeFrom: "Wheat",
    price: 8
};

console.log(addMenuCard(2,menuItem3));

console.log(addMenuCard(2,menuItem3));

console.log(addMenuCard(2,menuItem4));


function showMenuCard(hotelId){
    if(hotels[hotelId] && hotels[hotelId].menuCard){
        let menu = hotels[hotelId].menuCard;
        if(Object.keys(menu).length > 0){
            console.log(`Hotel Name: ${hotels[hotelId].hotelName}`);
            console.log("Menu Card: ");
            for(const item in menu){
                if(menu.hasOwnProperty(item)){
                    console.log(`Name: ${menu[item].name}, Made from: ${menu[item].madeFrom}, Price: ${menu[item].price}`);
                }
            }
        }
    }
}

console.log(showMenuCard(2));