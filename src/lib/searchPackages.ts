import { getRequest } from './request';

export const searchPackages = async (
  query: number,
  page: number,
  type: string,
): Promise<any> => {
  const data = await getRequest(
    `/search.json?q=${query}&page=${page}&type=${type}`,
  );
  return data;
};

export default searchPackages;
