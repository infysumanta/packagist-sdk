import { getRequest } from './request';

export const getPackageDetails = async (name: string): Promise<any> => {
  const data = await getRequest(`/packages/${name}.json`);
  return data;
};

export default getPackageDetails;
