import axios from "axios";
const url = "http://localhost:3001";

export interface Journey {
    departure: string;
    return: string;
    departureStationId: string;
    departureStationName: string;
    returnStationId: string;
    returnStationName: string;
    coveredDistanceInMeters: number;
    coveredDistanceInKms: number;
    durationInSeconds: number;
    durationInMinutes: number;
    totalNoOfJourneysStartingFromStation: number;
    totalNoOfJourneysEndingAtStation: number;
}

export interface JourneyPaginatedResponse {
    journeys: Array<Journey>;
    totalPages: number;
    currentPage: number;
}


export const getJourneys = async (): Promise<JourneyPaginatedResponse> => {
    const response = await axios.get(`${url}/journey`, {
        params: {
            page: 1,
            limit: 1
        }
    });
    return response.data;
};

export interface BicycleStation {
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

export interface BicycleStationPaginatedResponse {
    bicycleStations: Array<BicycleStation>;
    totalPages: number;
    currentPage: number;
}


export const getBicycleStations = async (): Promise<BicycleStationPaginatedResponse> => {
    const response = await axios.get(`${url}/bicyclestation`, {
        params: {
            page: 1,
            limit: 1
        }
    });
    return response.data;
}