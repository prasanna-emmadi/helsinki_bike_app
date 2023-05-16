import BicycleStationModel, {
  IBicycleStation,
} from "../models/bicycleStations.js";
import JournyeModel from "../models/journey.js";

const getJouneyCountsForStation = async (stationName: string) => {
    const totalNoOfJourneysStartingFromStation = await JournyeModel.find({ departureStationName: stationName}).count();
    const totalNoOfJourneysEndingAtStation = await JournyeModel.find({ returnStationName: stationName}).count();
    return {
      totalNoOfJourneysEndingAtStation,
      totalNoOfJourneysStartingFromStation
    }
}   

export const getBicycleStations = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    let allBicycleStations = await BicycleStationModel.find()
      // We multiply the "limit" variables by one just to make sure we pass a number and not a string
      .limit(limit * 1)
      // I don't think i need to explain the math here
      .skip((page - 1) * limit)
      // We sort the data by the date of their creation in descending order (user 1 instead of -1 to get ascending order)
      .sort({ createdAt: -1 });

      allBicycleStations = allBicycleStations.map(bicycleStation => {
        return bicycleStation._doc
      })

    // Getting the numbers of products stored in database
    const count = await BicycleStationModel.countDocuments();


    // departureStationName, returnStationName match with Name field
    // Total number of journeys starting from the station - departureStationName
    // Total number of journeys ending at the station - returnStationName
    const promises = allBicycleStations.map(bicycleStation => {
      return getJouneyCountsForStation(bicycleStation.Nimi)
      .then(result => {
        return {
          ...bicycleStation,
          ...result
        }
      })
    })

    const bicycleStations = await Promise.all(promises)

    res.json({
      bicycleStations,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    next(err);
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
