export const degIn5hr = ({
  future,
  current,
}: {
  future: number;
  current: number;
}) => {
  const posNeg =
    Math.ceil(future - current) === 0
      ? "± "
      : Math.sign(future - current) === 1
      ? "+"
      : "";

  return `${posNeg}${Math.ceil(future - current)}`;
};
