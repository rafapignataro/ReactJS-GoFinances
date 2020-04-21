const formatDate = (date: string): string => {
  const dateSplitted = date.substr(0, 10).split('-');
  const finalDate = `${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`;

  return finalDate;
};

export default formatDate;
