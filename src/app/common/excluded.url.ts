import { environment } from "../../environments/environment";
import { endPoint } from "./endpoints";

export const excludedUrls: any[] = [];

excludedUrls.push(environment.apiUrl+endPoint.getPlayer)
