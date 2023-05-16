import JourneyModel, { IJourney } from "../models/journey.js";

export const getJourneys = async (req, res, next) => {
  try {
    // We destructure the req.query object to get the page and limit variables from url

    const { page = 1, limit = 10 } = req.query;

    let journeys = await JourneyModel.find()
      // We multiply the "limit" variables by one just to make sure we pass a number and not a string
      .limit(limit * 1)
      // I don't think i need to explain the math here
      .skip((page - 1) * limit)
      // We sort the data by the date of their creation in descending order (user 1 instead of -1 to get ascending order)
      .sort({ createdAt: -1 });

    journeys = journeys.map(jouney => {
        return jouney._doc
      });

    // Getting the numbers of products stored in database
    const count = await JourneyModel.countDocuments();

    // change journey according to the specification
    // For each journey show departure and
    // return stations,
    // covered distance in kilometers and
    // duration in minutes

    const modifiedJourneys = journeys.map((journey) => {
      return {
        ...journey,
        coveredDistanceInKms: Math.ceil(journey.coveredDistanceInMeters / 1000),
        durationInMinutes: Math.ceil(journey.durationInSeconds / 60),
      };
    });

    res.json({
      journeys: modifiedJourneys,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    next(err);
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
