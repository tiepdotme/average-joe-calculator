export const calculateScore = ({ coffee, aesthetic, seating, price, food, wifi }) => {
  const score = 
    (coffee * 6)    + // 30
    (aesthetic * 5) + // 25
    (seating * 5)   + // 25
    (price * 3 + 1) + // 10
    (food ? 5 : 0)  + // 5
    (wifi ? 5 : 0);   // 5

  return score;
};
