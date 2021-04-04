import { Product } from "./product";
import { ResponseModel } from "./responseModel";

//burada iki responsemodel i inherit ettik. (succes ve messagei kullanabiliyoruz.)
export interface ProductListResponseModel extends ResponseModel{
    data:Product[]
}