import { ObjectType } from "typescript";
import { BrokerService } from "./broker_service";

class ConnectionManager {
    url:string;
    port:number;
    headers:string;
    body:object;
   
    constructor(url:string, port:number, headers:string, body:object) {
        this.url = url;
        this.port = port;
        this.headers = headers;
        this.body = body;
    }
   
    establish() {
        return 1;
    }

    ruin() {
        return 0;
    }

  }