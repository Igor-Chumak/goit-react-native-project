export const formatCreateAtFirebase = (createdAt) => {
  const getMonthName = (monthNumber) => {
    createdAt.setMonth(monthNumber - 1);
    return createdAt.toLocaleString("uk-UA", { month: "long" });
  };

  return `${createdAt.getDate()} ${getMonthName(
    createdAt.getMonth() + 1
  )} ${createdAt.getFullYear()} | ${createdAt.getHours()}:${`${createdAt.getMinutes()}`.padStart(
    2,
    "0"
  )}`;
};
