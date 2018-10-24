// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filtered = driversWithRevenueOver(drivers, revenue);
  return filtered.map(function(driver) {return driver.name})
}
