//our test data base
let dataBase = [
  { parcel_ID: "HGY654HY", cellNumber: 5, code: "CE67EQ82", price: 50 },
  { parcel_ID: "OIU76GV", cellNumber: 4, code: "A001DFX0", price: 100 },
  { parcel_ID: "OI89GT67", cellNumber: 16, code: "V058DWA1", price: 1050 },
];

//test user data: code is the code from sms
let userData = { code: "A001DFX0", balance: 500 };

//postamat includes id of parcels which are inside it
let postamat = [];

//let's fill in the postamat with parcel ids from our test data base
for (let parcel of dataBase) {
  postamat.push(parcel.parcel_ID);
}

//this function will imitate the process of picking up a parcel
function pickUpParcel(dataBase, userData, postamat) {
  let parcel_ID, parcelPrice, parcelCell, arrIndex;

  //user entered the code they got to the postamat and the postamat is searching if the code is matched with any of parcels it stores
  for (let [index, parcel] of dataBase.entries()) {
    if (parcel.code.includes(userData.code)) {
      parcel_ID = parcel.parcel_ID;
      parcelPrice = parcel.price;
      parcelCell = parcel.cellNumber;
      arrIndex = index;
      break;
    }
  }

  //check if our postamat truly has the parcel with such ID
  if (!postamat.includes(parcel_ID)) {
    console.log("Something went wrong...");
    return;
  }

  //let's proceed payment
  if (parcelPrice > userData.balance) {
    console.log("Not enough money on your balance");
    return;
  } else {
    userData.balance = userData.balance - parcelPrice;
  }

  //allow user to pick up the parcel and show the message of success
  console.log(
    `Please pick up the parcel ${parcel_ID} from the ${parcelCell} cell. Your bill is ${parcelPrice}.`
  );

  //let's update our data in the postamat
  postamat.splice(postamat.indexOf(parcel_ID), 1);

  //let's update our data in the data base
  dataBase.splice(arrIndex, 1);
}

pickUpParcel(dataBase, userData, postamat);
