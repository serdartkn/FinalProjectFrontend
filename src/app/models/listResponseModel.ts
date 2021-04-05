import { ResponseModel } from "./responseModel";

//burası daha önceden olusturdugumuz ProductListResponseModel vd generic hali
export interface ListResponseModel<T> extends ResponseModel{
    data :T[];
}