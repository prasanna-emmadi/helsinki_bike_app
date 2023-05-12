import JourneyModel, { IJourney } from "../models/journey.js";

export const getJourney = async (_req, res) => {
  res.send("Here will be particular Journey");
};

export const getAllJourneys = async (req, res) => {
  try {
    const allJourneys = await JourneyModel.find();
    res.json(allJourneys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addJourney = async (req, res) => {
  const dataToSave = req.body;
  if (
    !dataToSave ||
    typeof dataToSave.departure !== "string" ||
    typeof dataToSave.return !== "string" ||
    typeof dataToSave.departureStationId !== "string" ||
    typeof dataToSave.departureStationName !== "string" ||
    typeof dataToSave.returnStationId !== "string" ||
    typeof dataToSave.returnStationName !== "string" ||
    typeof dataToSave.coveredDistanceInMeters !== "number" ||
    typeof dataToSave.durationInSeconds !== "number"
  ) {
    res.status(400).send({ message: "Data is not correct format" });
  } else {
    try {
      const newJourney = new JourneyModel(dataToSave);
      const savedJourney = await newJourney.save();
      res.json(savedJourney);
    } catch (e) {
      res.status(400).json({ message: "error in data format" });
    }
  }
};

export const insertMany = async (journeys: Array<IJourney>) => {
  try {
    await JourneyModel.insertMany(journeys);
  } catch (e) {
    console.error(e);
  }
};
