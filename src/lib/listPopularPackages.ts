import { getRequest } from './request';

export const getListPopularPackages = async (
  perPage: number,
  page: number,
): Promise<any> => {
  const data = await getRequest(
    `/explore/popular.json?per_page=${perPage}&page=${page}`,
  );
  return data;
};

export default getListPopularPackages;
