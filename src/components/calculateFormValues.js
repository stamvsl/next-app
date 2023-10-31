const calculateFormValues = (currentValues, newName, newValue) => {
  const cloneState = { ...currentValues };

  if (newName === "grossValue") {
    const grossValue = newValue;
    const vatClass = cloneState.vatClass;
    const netValue = (grossValue / (1 + vatClass / 100)).toFixed(2);
    const vatValue = (parseFloat(netValue) * (vatClass / 100)).toFixed(2);
    cloneState.vatValue = vatValue;
    cloneState.netValue = netValue;
    cloneState.grossValue = grossValue;
  }

  if (newName === "netValue") {
    const netValue = parseFloat(newValue);
    const vatClass = cloneState.vatClass;
    const vatValue = parseFloat((netValue * (vatClass / 100)).toFixed(2));
    const grossValue = parseFloat(netValue + vatValue);
    cloneState.vatValue = vatValue;
    cloneState.netValue = netValue;
    cloneState.grossValue = grossValue;
  }

  if (newName === "vatClass") {
    const vatClass = newValue;
    const netValue = cloneState.netValue;
    const vatValue = parseFloat((netValue * (vatClass / 100)).toFixed(2));
    const grossValue = parseFloat(netValue + vatValue);
    cloneState.vatValue = vatValue;
    cloneState.vatClass = vatClass;
    cloneState.grossValue = grossValue;
  }
  return cloneState;
};

export default calculateFormValues;
