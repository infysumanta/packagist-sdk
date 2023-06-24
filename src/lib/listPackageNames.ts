import { getRequest } from './request';

export const getListPackageNames = async (): Promise<any> => {
  const data = await getRequest(`/packages/list.json`);
  return data;
};

export default getListPackageNames;
