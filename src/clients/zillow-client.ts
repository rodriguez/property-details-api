import { kvm } from "../types";

interface Endpoints {
   PROPERTY: "https://api.bridgedataoutput.com/api/v2/OData/test/Property" 
}

interface IZillowClient {
    token: string;
    getListings(): Promise<kvm>;
}

export class ZillowClient implements IZillowClient {
    constructor() {}
    getListings(): Promise<kvm> {
        
    }
}