import { loadData } from "./load.js";
import { getDirectorsStats, getUsersReport } from "./movies-service.js";

const { movies } = loadData();

for (const { director, count, avgRating } of getDirectorsStats(movies)) {
  console.log(`${director} | movies: ${count} | avg: ${avgRating.toFixed(2)}`);
}

for (const { username, count, avgScore } of getUsersReport(movies)) {
  console.log(`${username} | reviews: ${count} | avg: ${avgScore.toFixed(1)}`);
}