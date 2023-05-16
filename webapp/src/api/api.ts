import axios from "axios";
const url = "http://localhost:3001";


export const getJourneys = async () => {
    const response = await axios.get(`${url}/journey`);
    return response.data.journeys;
};


