export const bigCardFirstSlider = {
  title: "Ingresos",
  subtitle: "Marina de Empresas",
  headline: "Ingresos Brutos",
};
export const bigCardSecondSlider = {
  title: "Unidades",
  subtitle: "Marina de Empresas",
  headline: "Unidades",
};
// eslint-disable-next-line
export const smallCardDataPositive = {
  type: "Rotación",
  productName: "Ensalada Caesar",
  productSku: "T: LANZ IZ . EID:002",
  oldValue: "2",
  newValue: "10",
  change: "+80%",
  variant: "positive",
};
// eslint-disable-next-line
export const smallCardDataNegative = {
  type: "Costos",
  title: "[Mercadona] Aumento de Precio sku: Sandiwch Pollo",
  description:
    "INGRESOS: Baja de ingresos,en caso de no actualizar Precio Venta",
  variant: "negative",
};
export const smallCardDataNegativeAlertsCosts = {
  type: "Costos",
  title: "Aumento [SKU X] en [X centimos]",
  description: "Acción: Ajustar precios para no perder beneficios",
  variant: "negative",
};
export const smallCardDataNegativeAlertsRotation = {
  type: "Rotación",
  title: "Aumento [SKU X] en [X centimos]",
  description: "Acción: Ajustar precios para no perder beneficios",
  variant: "negative",
};

export const mediumCardDataPositive = {
  type: "TOP 3",
  title: "Experimentos en [15 días]",
  list: [
    { "Sandwich Pastrami": "+39 Ventas" },
    { "Sandwich Mila": "+27 Ventas" },
    { "Ensaladilla Tusa": "+26 Ventas" },
  ],
  value: "",
  icon: "experiment",
  variant: "positive",
};
export const mediumCardDataNegative = {
  type: "TOP 3",
  title: "Menos Vendidos en [15 días]",
  list: [
    { "Ensalada MEX": "6 Ventas" },
    { "Carne / Papas": "4 Ventas" },
    { "Ensalada Pasta": "3 Ventas" },
  ],
  value: "",
  icon: "vending",
  variant: "negative",
};
export const mediumCardDataNeutral = {
  type: "CAMP ID",
  title: "101",
  subtitle: "¡NO te quedes sin el tuyo!",
  list: [
    "Sandwich de Pollo",
    "Precio PROMO a 3.00€",
    "SLOT 45 - MAQUINA LANZADERA",
  ],
  imgURL:
    "https://okdiario.com/img/2023/01/16/sandwich-de-pollo-de-mercadona.jpg",
  variant: "neutral",
};
export const mediumCardDataExperiment = {
  type: "EXPERIMENTO",
  title: "102 Sandwich Pastrami",
  icon: "blocks",
  value: "+168",
  variant: "positive",
  arrow: false,
};

export const mediumCardDataWinnerOfMonth = {
  type: "GANADOR DEL MES",
  content:
    "Este [mes] el Producto mas vendido es [Ensalada Pasta] con  [60 Ventas]",
  variant: "positive",
  arrow: false,
};
export const mediumCardDataLoserOfMonth = {
  type: "PERDEDOR DEL MES",
  content:
    "Este [mes] el Producto menos vendido es [Ensalada Pasta] con solo [3 Ventas]",
  variant: "negative",
  arrow: false,
};
export const mediumCardDataTopSpendingPerTurns = {
  type: "TOP Consumo Turnos",
  list: [
    { Desayuno: "X Unidades / X Euros / Particpacion X%" },
    { Almuerzo: "X Unidades / X Euros / Particpacion X%" },
    { Comida: "X Unidades / X Euros / Particpacion X%" },
    { Merienda: "X Unidades / X Euros / Particpacion X%" },
    { Cena: "X Unidades / X Euros / Particpacion X%" },
  ],
  variant: "neutral",
  arrow: false,
};
