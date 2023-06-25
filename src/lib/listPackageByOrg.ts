import { getRequest } from './request';

export const geListPackageByOrg = async (vendor: string): Promise<any> => {
  const data = await getRequest(`/packages/list.json?vendor=${vendor}`);
  return data;
};

export default geListPackageByOrg;
