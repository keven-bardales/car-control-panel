import { Axios } from "../../../../../shared/config/axios/http-axios-instance";
import { ApiPagination } from "../../../../../shared/interfaces/api/api-pagination";
import { ApiResponse } from "../../../../../shared/interfaces/api/api-response.interface";
import { Driver } from "../../interfaces/api/driver.interface";

export class DriverService {
  baseUrl = "/driver";

  async getAll(params: ApiPagination<Driver>) {
    const response = Axios.get(`${this.baseUrl}/getAll`, {
      params: {
        ...params,
      },
    });

    const data: ApiResponse<ApiPagination<Driver>> = (await response).data;

    return data;
  }
}
