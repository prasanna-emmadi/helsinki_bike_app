import BicycleStationModel, {
  IBicycleStation,
} from "../models/bicycleStations.js";

export const getBicycleStation = async (_req, res) => {
  res.send("Here will be particular BicycleStation");
};

export const getAllBicycleStations = async (req, res) => {
  try {
    const allBicycleStations = await BicycleStationModel.find();
    res.json(allBicycleStations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBicycleStation = async (req, res) => {
  const dataToSave = req.body;
  if (
    !dataToSave ||
    typeof dataToSave.FID !== "number" ||
    typeof dataToSave.ID !== "number" ||
    typeof dataToSave.Nimi !== "string" ||
    typeof dataToSave.Name !== "string" ||
    typeof dataToSave.Osoite !== "string" ||
    typeof dataToSave.Address !== "string" ||
    typeof dataToSave.Kaupunki !== "string" ||
    typeof dataToSave.Stad !== "string" ||
    typeof dataToSave.Operaattor !== "string" ||
    typeof dataToSave.Kapasiteet !== "string" ||
    typeof dataToSave.x !== "number" ||
    typeof dataToSave.y !== "number"
  ) {
    res.status(400).send({ message: "Data is not correct format" });
  } else {
    try {
      const newBicycleStation = new BicycleStationModel(dataToSave);
      const savedBicycleStation = await newBicycleStation.save();
      res.json(savedBicycleStation);
    } catch (e) {
      res.status(400).json({ message: "error in data format" });
    }
  }
};

export const insertMany = async (bicycleStations: Array<IBicycleStation>) => {
  try {
    await BicycleStationModel.insertMany(bicycleStations);
  } catch (e) {
    console.error(e);
  }
};
