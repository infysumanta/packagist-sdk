const MAIN_URL = 'https://packagist.org';

// List Package Name
// GET https://packagist.org/packages/list.json
const allPackagesURl = MAIN_URL + '/packages/list.json';
// GET https://packagist.org/packages/list.json?vendor=[vendor]
const listPackageByOrgUrl = allPackagesURl + '?vendor=';
// GET https://packagist.org/packages/list.json?type=[type]
const listPackageByTypeUrl = allPackagesURl + '?type=';
// GET https://packagist.org/packages/list.json?vendor=[type]&fields[]=type&fields[]=repository&fields[]=abandoned
const listPackageByOrgAndTypeUrl =
  allPackagesURl +
  '?vendor=[vendor]&type=[type]&fields[]=type&fields[]=repository&fields[]=abandoned';

// Search By Package
// GET https://packagist.org/explore/popular.json?per_page=100
const popularPackagesUrl = MAIN_URL + '/explore/popular.json?per_page=100';
// GET https://packagist.org/search.json?q=[query]
const searchPackagesUrl = MAIN_URL + '/search.json?q=[query]';
// GET https://packagist.org/search.json?tags=[tag]
const searchPackagesByTagUrl = MAIN_URL + '/search.json?tags=';

// Getting package data
// Using composer v2
// GET https://repo.packagist.org/p2/[vendor]/[package].json
const packageDataUrlV2 =
  'https://repo.packagist.org/p2/[vendor]/[package].json';
// Using composer v1
// GET https://repo.packagist.org/p/[vendor]/[package].json
const packageDataUrlV1 = 'https://repo.packagist.org/p/[vendor]/[package].json';
// Using the API
// GET https://packagist.org/packages/[vendor]/[package].json
const packageDataUrl = MAIN_URL + '/packages/[vendor]/[package].json';

// Get package download stats
// GET https://packagist.org/packages/[vendor]/[package]/stats.json
const packageDownloadStatsUrl =
  MAIN_URL + '/packages/[vendor]/[package]/stats.json';

// Track package updates
// GET https://packagist.org/metadata/changes.json
const packageUpdatesUrl = MAIN_URL + '/metadata/changes.json';

// Get statistics
// GET https://packagist.org/statistics.json
const statisticsUrl = MAIN_URL + '/statistics.json';

// List security advisories
// GET https://packagist.org/api/security-advisories/?updatedSince=[timestamp]&packages[]=[vendor/package]
const securityAdvisoriesUrl = MAIN_URL + '/api/security-advisories/';
