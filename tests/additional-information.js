const SwissQRBill = require("../");
const { writeFileSync } = require("fs");

const data = {
  currency: "CHF",
  amount: 1199.95,
  reference: "210000000003139471430009017",
  additionalInformation: "//S1/10/10201409/11/170309/20/14000000/ 30/106017086",
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac 1268",
    zip: 2501,
    city: "Biel",
    account: "CH4431999123000889012",
    country: "CH"
  },
  debtor: {
    name: "Pia-Maria Rutschmann-Schnyder",
    address: "Grosse Marktgasse 28",
    zip: 9400,
    city: "Rorschach",
    country: "CH"
  }
};

const pdf = new SwissQRBill.PDF(data, "./output/pdf/additional-information.pdf", { "size": "A6/5" });
const svg = new SwissQRBill.SVG(data);
writeFileSync("./output/svg/additional-information.svg", svg.toString());