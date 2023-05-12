import mongoose from "mongoose";

export interface IBicycleStation {
  FID: number;
  ID: number;
  Nimi: string;
  Name: string;
  Osoite: string;
  Address: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: number;
  x: number;
  y: number;
}

const BicycleStationSchema = new mongoose.Schema<IBicycleStation>({
  FID: Number,
  ID: Number,
  Nimi: String,
  Name: String,
  Osoite: String,
  Address: String,
  Kaupunki: String,
  Stad: String,
  Operaattor: String,
  Kapasiteet: Number,
  x: Number,
  y: Number,
});

/*
FID,
ID,
Nimi,
Namn,
Name,
Osoite,
Adress,
Kaupunki,
Stad,
Operaattor,
Kapasiteet,
x,
y

*/
// FID,ID,Nimi,      Namn,      Name,     Osoite,           Adress,              Kaupunki,  Stad, Operaattor,      Kapasiteet,x,          y
// 1,  501,Hanasaari,Hanaholmen,Hanasaari,Hanasaarenranta 1,Hanaholmsstranden 1,Espoo,      Esbo, CityBike Finland,10,        24.840319,60.16582

// create schema

let BicycleStationModel: any;
if (mongoose.models.bicycleStations) {
  BicycleStationModel = mongoose.models.bicycleStations;
} else {
  BicycleStationModel = mongoose.model<IBicycleStation>(
    "bicycleStations",
    BicycleStationSchema
  );
}
export default BicycleStationModel;
