import { getRequest } from './request';

export const geListPackagesByType = async (type: string): Promise<any> => {
  const data = await getRequest(`/packages/list.json?type=${type}`);
  return data;
};

export default geListPackagesByType;
