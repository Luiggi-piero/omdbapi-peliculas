import { Movie } from "./movie";

export interface OmdbapiResponse {
    Search:       Movie[];
    totalResults: string;
    Response:     string;
}
