const { useState, useEffect } = React;

const today = new Date().toISOString().slice(0, 10);

function getStreak(doneDates) {
  const dates = new Set(doneDates);
  let streak = 0;
  let date = new Date();

  if (!dates.has(today)) {
    date.setDate(date.getDate() - 1);
  }

  while (dates.has(date.toISOString().slice(0, 10))) {
    streak++;
    date.setDate(date.getDate() - 1);
  }

  return streak;
}