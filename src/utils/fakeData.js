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
export const bigCardThirdSlider = {
  title: "Beneficios",
  subtitle: "Marina de Empresas",
  headline: "Beneficios Brutos",
};


//SMALL CARDS FAKE DATA
export const smallCardDataPositive1 = {
  type: "Rotación",
  productName: "Sandwich Atún",
  productSku: "M:Lan 001 [04-04/19-04]",
  oldValue: "2",
  newValue: "10",
  change: "+80%",
  variant: "positive",
};
export const smallCardDataPositive2 = {
  type: "Rotación",
  productName: "Ensalada Caesar",
  productSku: "M:Lan 002 [15-04/30-04]",
  oldValue: "6",
  newValue: "16",
  change: "+62%",
  variant: "positive",
};
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


//MEDIUM CARDS FAKE DATA
export const mediumCardDataPositive = {
  type: "TOP 3",
  title: "Ventas en [15 días]",
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

//DROPDOWN FAKE DATA

export const dropdownFakeData = {
  categories: ["TODAS", "default", "Snacks", "Cafés"],
  clusters: [
    "default",
    "Lanzadera",
    "EDEM",
    "Angels",
    "Serrano",
    "Aquaservice",
  ],
  locations: ["TODAS", "default", "Piso 1", "Piso 2"],
  machines: [
    {
      id: 1,
      alias: "lanzadera com izq",
    },
  ],
};

//PORTFOLIO FAKE DATA
const dataMPortfolio = {
  filters: {
    clientId: "natica",
    period: "m",
    dateRange: {
      current: {
        startDate: "2024-01-01T03:00:00.000Z",
        endDate: "2024-02-01T02:59:59.999Z",
      },
      previous: {
        startDate: "2023-12-01T03:00:00.000Z",
        endDate: "2024-01-01T02:59:59.999Z",
      },
    },
    storeIds: [1],
  },
  currency: {
    symbol: "€",
    code: "EUR",
  },
  sales: {
    total: 165.65,
    total_previous_period: 274.3,
    difference_str: "39.61%",
    difference: -39.61,
    avg: 1.13,
    avg_sale_per_store: 165.65,
    total_sales_recurring_customer: 91.65,
  },
  units: {
    total: 146,
    total_previous_period: 257,
    difference_str: "43.19%",
    difference: -43.19,
    avg_orders_per_customer: 1.8481012658227849,
    avg_units_per_order: 1,
    total_recurring_customers: 23,
  },
};
export const portfolioFakeData = {
  w: {
    filters: {
      clientId: "natica",
      period: "w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-04T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-21T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMPortfolio.sales.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.sales.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "11%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      // avg: dataMPortfolio.sales.avg / 4, // Estimativo basado en la duración del mes
      avg: "1", // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMPortfolio.sales.avg_sale_per_store / 4, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMPortfolio.sales.total_sales_recurring_customer / 4, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMPortfolio.units.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.units.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "10%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      avg_orders_per_customer: dataMPortfolio.units.avg_orders_per_customer / 4, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMPortfolio.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMPortfolio.units.total_recurring_customers / 4, // Estimativo basado en la duración del mes
    },
  },
  "2w": {
    filters: {
      clientId: "natica",
      period: "2w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-11T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-14T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMPortfolio.sales.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.sales.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "17%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg: dataMPortfolio.sales.avg / 2, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMPortfolio.sales.avg_sale_per_store / 2, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMPortfolio.sales.total_sales_recurring_customer / 2, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMPortfolio.units.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.units.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "15%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg_orders_per_customer: dataMPortfolio.units.avg_orders_per_customer / 2, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMPortfolio.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMPortfolio.units.total_recurring_customers / 2, // Estimativo basado en la duración del mes
    },
  },
  m: {
    filters: {
      clientId: "natica",
      period: "m",
      dateRange: {
        current: {
          startDate: "2024-01-01T03:00:00.000Z",
          endDate: "2024-02-01T02:59:59.999Z",
        },
        previous: {
          startDate: "2023-12-01T03:00:00.000Z",
          endDate: "2024-01-01T02:59:59.999Z",
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: 165.65,
      total_previous_period: 274.3,
      difference_str: "39.61%",
      difference: 39.61,
      avg: 1.13,
      avg_sale_per_store: 165.65,
      total_sales_recurring_customer: 91.65,
    },
    units: {
      total: 146,
      total_previous_period: 257,
      difference_str: "43.19%",
      difference: 43.19,
      avg_orders_per_customer: 1.8481012658227849,
      avg_units_per_order: 1,
      total_recurring_customers: 23,
    },
  },
  y: {
    filters: {
      clientId: "natica",
      period: "y",
      dateRange: {
        current: {
          startDate: "2025-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2025-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2024-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMPortfolio.sales.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.sales.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "21%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg: dataMPortfolio.sales.avg * 12, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMPortfolio.sales.avg_sale_per_store * 12, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMPortfolio.sales.total_sales_recurring_customer * 12, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMPortfolio.units.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMPortfolio.units.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "25%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg_orders_per_customer:
        dataMPortfolio.units.avg_orders_per_customer * 12, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMPortfolio.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMPortfolio.units.total_recurring_customers * 12, // Estimativo basado en la duración del mes
    },
  },
};

//MACHINES FAKE DATA
const dataMMachines = {
  filters: {
    clientId: "natica",
    period: "m",
    dateRange: {
      current: {
        startDate: "2024-01-01T03:00:00.000Z",
        endDate: "2024-02-01T02:59:59.999Z",
      },
      previous: {
        startDate: "2023-12-01T03:00:00.000Z",
        endDate: "2024-01-01T02:59:59.999Z",
      },
    },
    storeIds: [1], // Cambiado a [1] para representar una sola máquina en lugar de una flota
  },
  currency: {
    symbol: "€",
    code: "EUR",
  },
  sales: {
    total: 50, // Valor estimativo para una sola máquina
    total_previous_period: 40, // Valor estimativo para una sola máquina
    difference_str: "25%", // Puede ajustarse según los datos reales
    difference: 25,
    avg: 1, // Puede ajustarse según los datos reales
    avg_sale_per_store: 10, // Valor estimativo para una sola máquina
    total_sales_recurring_customer: 15, // Valor estimativo para una sola máquina
  },
  units: {
    total: 30, // Valor estimativo para una sola máquina
    total_previous_period: 25, // Valor estimativo para una sola máquina
    difference_str: "20%", // Puede ajustarse según los datos reales
    difference: 20,
    avg_orders_per_customer: 1.5, // Puede ajustarse según los datos reales
    avg_units_per_order: 1,
    total_recurring_customers: 5, // Valor estimativo para una sola máquina
  },
};

export const machinesFakeData = {
  w: {
    filters: {
      clientId: "natica",
      period: "w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-04T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-21T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMMachines.sales.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.sales.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "5%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      avg: dataMMachines.sales.avg / 4, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMMachines.sales.avg_sale_per_store / 4, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMMachines.sales.total_sales_recurring_customer / 4, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMMachines.units.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.units.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "7%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      avg_orders_per_customer: dataMMachines.units.avg_orders_per_customer / 4, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMMachines.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMMachines.units.total_recurring_customers / 4, // Estimativo basado en la duración del mes
    },
  },
  "2w": {
    filters: {
      clientId: "natica",
      period: "2w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-11T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-14T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMMachines.sales.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.sales.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "9%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg: dataMMachines.sales.avg / 2, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMMachines.sales.avg_sale_per_store / 2, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMMachines.sales.total_sales_recurring_customer / 2, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMMachines.units.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.units.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "12%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg_orders_per_customer: dataMMachines.units.avg_orders_per_customer / 2, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMMachines.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMMachines.units.total_recurring_customers / 2, // Estimativo basado en la duración del mes
    },
  },
  m: {
    filters: {
      clientId: "natica",
      period: "m",
      dateRange: {
        current: {
          startDate: "2024-01-01T03:00:00.000Z",
          endDate: "2024-02-01T02:59:59.999Z",
        },
        previous: {
          startDate: "2023-12-01T03:00:00.000Z",
          endDate: "2024-01-01T02:59:59.999Z",
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: 165.65,
      total_previous_period: 274.3,
      difference_str: "39.61%",
      difference: 39.61,
      avg: 1.13,
      avg_sale_per_store: 165.65,
      total_sales_recurring_customer: 91.65,
    },
    units: {
      total: 146,
      total_previous_period: 257,
      difference_str: "43.19%",
      difference: 43.19,
      avg_orders_per_customer: 1.8481012658227849,
      avg_units_per_order: 1,
      total_recurring_customers: 23,
    },
  },
  y: {
    filters: {
      clientId: "natica",
      period: "y",
      dateRange: {
        current: {
          startDate: "2025-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2025-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2024-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMMachines.sales.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.sales.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "33%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg: dataMMachines.sales.avg * 12, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMMachines.sales.avg_sale_per_store * 12, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMMachines.sales.total_sales_recurring_customer * 12, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMMachines.units.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMMachines.units.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "35%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg_orders_per_customer: dataMMachines.units.avg_orders_per_customer * 12, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMMachines.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMMachines.units.total_recurring_customers * 12, // Estimativo basado en la duración del mes
    },
  },
};

//EXPERIMENTS FAKE DATA
const dataMExperiments = {
  filters: {
    clientId: "natica",
    period: "m",
    dateRange: {
      current: {
        startDate: "2024-01-01T03:00:00.000Z",
        endDate: "2024-02-01T02:59:59.999Z",
      },
      previous: {
        startDate: "2023-12-01T03:00:00.000Z",
        endDate: "2024-01-01T02:59:59.999Z",
      },
    },
    storeIds: [1], // Cambiado a [1] para representar una sola máquina en lugar de una flota
  },
  currency: {
    symbol: "€",
    code: "EUR",
  },
  sales: {
    total: 35, // Valor estimativo para una sola máquina
    total_previous_period: 40, // Valor estimativo para una sola máquina
    difference_str: "25%", // Puede ajustarse según los datos reales
    difference: 25,
    avg: 1, // Puede ajustarse según los datos reales
    avg_sale_per_store: 10, // Valor estimativo para una sola máquina
    total_sales_recurring_customer: 15, // Valor estimativo para una sola máquina
  },
  units: {
    total: 22, // Valor estimativo para una sola máquina
    total_previous_period: 25, // Valor estimativo para una sola máquina
    difference_str: "20%", // Puede ajustarse según los datos reales
    difference: 20,
    avg_orders_per_customer: 1.5, // Puede ajustarse según los datos reales
    avg_units_per_order: 1,
    total_recurring_customers: 5, // Valor estimativo para una sola máquina
  },
};

export const experimentsFakeData = {
  w: {
    filters: {
      clientId: "natica",
      period: "w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-04T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-21T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMExperiments.sales.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.sales.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "0%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      avg: dataMExperiments.sales.avg / 4, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMExperiments.sales.avg_sale_per_store / 4, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMExperiments.sales.total_sales_recurring_customer / 4, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMExperiments.units.total / 4, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.units.total_previous_period / 4, // Estimativo basado en la duración del mes
      difference_str: "0%", // No hay diferencia ya que es el primer periodo semanal
      difference: 0,
      avg_orders_per_customer:
        dataMExperiments.units.avg_orders_per_customer / 4, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMExperiments.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMExperiments.units.total_recurring_customers / 4, // Estimativo basado en la duración del mes
    },
  },
  "2w": {
    filters: {
      clientId: "natica",
      period: "2w",
      dateRange: {
        current: {
          startDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-02-11T13:28:06.861Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-14T13:28:06.861Z", // Extrapolado desde el período m
          endDate: "2024-01-28T13:28:06.861Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMExperiments.sales.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.sales.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "15%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg: dataMExperiments.sales.avg / 2, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMExperiments.sales.avg_sale_per_store / 2, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMExperiments.sales.total_sales_recurring_customer / 2, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMExperiments.units.total / 2, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.units.total_previous_period / 2, // Estimativo basado en la duración del mes
      difference_str: "15%", // No hay diferencia ya que es el primer periodo de dos semanas
      difference: 0,
      avg_orders_per_customer:
        dataMExperiments.units.avg_orders_per_customer / 2, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMExperiments.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMExperiments.units.total_recurring_customers / 2, // Estimativo basado en la duración del mes
    },
  },
  m: {
    filters: {
      clientId: "natica",
      period: "m",
      dateRange: {
        current: {
          startDate: "2024-01-01T03:00:00.000Z",
          endDate: "2024-02-01T02:59:59.999Z",
        },
        previous: {
          startDate: "2023-12-01T03:00:00.000Z",
          endDate: "2024-01-01T02:59:59.999Z",
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: 165.65,
      total_previous_period: 274.3,
      difference_str: "39.61%",
      difference: 39.61,
      avg: 1.13,
      avg_sale_per_store: 165.65,
      total_sales_recurring_customer: 91.65,
    },
    units: {
      total: 146,
      total_previous_period: 257,
      difference_str: "43.19%",
      difference: 43.19,
      avg_orders_per_customer: 1.8481012658227849,
      avg_units_per_order: 1,
      total_recurring_customers: 23,
    },
  },
  y: {
    filters: {
      clientId: "natica",
      period: "y",
      dateRange: {
        current: {
          startDate: "2025-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2025-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
        previous: {
          startDate: "2024-01-01T00:00:00.000Z", // Extrapolado desde el período m
          endDate: "2024-12-31T23:59:59.999Z", // Extrapolado desde el período m
        },
      },
      storeIds: [1],
    },
    currency: {
      symbol: "€",
      code: "EUR",
    },
    sales: {
      total: dataMExperiments.sales.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.sales.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "0%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg: dataMExperiments.sales.avg * 12, // Estimativo basado en la duración del mes
      avg_sale_per_store: dataMExperiments.sales.avg_sale_per_store * 12, // Estimativo basado en la duración del mes
      total_sales_recurring_customer:
        dataMExperiments.sales.total_sales_recurring_customer * 12, // Estimativo basado en la duración del mes
    },
    units: {
      total: dataMExperiments.units.total * 12, // Estimativo basado en la duración del mes
      total_previous_period: dataMExperiments.units.total_previous_period * 12, // Estimativo basado en la duración del mes
      difference_str: "0%", // No hay diferencia ya que es el primer año
      difference: 0,
      avg_orders_per_customer:
        dataMExperiments.units.avg_orders_per_customer * 12, // Estimativo basado en la duración del mes
      avg_units_per_order: dataMExperiments.units.avg_units_per_order, // No se estima diferencia en la duración del mes
      total_recurring_customers:
        dataMExperiments.units.total_recurring_customers * 12, // Estimativo basado en la duración del mes
    },
  },
};

//TRAFFIC LIGHT FAKE DATA
export const trafficLightData1 = {
  unitVolume: "red",
  billing: "green",
  profitability: "yellow",
};
export const trafficLightData2 = {
  unitVolume: "green",
  billing: "green",
  profitability: "yellow",
};
export const trafficLightData3 = {
  unitVolume: "red",
  billing: "green",
  profitability: "red",
};
