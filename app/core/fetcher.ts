import axios from 'axios';

export const BASE_URL = 'https://dev.reddays.kr';
axios.defaults.baseURL = BASE_URL;

export async function fetcher(url: string, params: string = ''): Promise<any> {
  try {
    const res = await axios.get(url + '?' + params);
    return res.data;
  } catch (e: any) {
    const error: any = new Error(
      e.response.data.message ?? e.response.message ?? 'Unknown',
    );
    error.statusCode = e.response?.data.statusCode ?? e.response.status;
    throw error;
  }
}
