// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const all = [];
  for (const department of Object.values(allEmployees)) {
    all.push(...department);
  }
  return all;
}
