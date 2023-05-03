class CarServiceStation {
    constructor() {
      this.services = [
        {
          code: "BS01",
          name: "Basic Servicing",
          hatchbackPrice: 2000,
          sedanPrice: 4000,
          suvPrice: 5000,
        },
        {
          code: "EF01",
          name: "Engine Fixing",
          hatchbackPrice: 5000,
          sedanPrice: 8000,
          suvPrice: 10000,
        },
        {
          code: "CF01",
          name: "Clutch Fixing",
          hatchbackPrice: 2000,
          sedanPrice: 4000,
          suvPrice: 6000,
        },
        {
          code: "BF01",
          name: "Brake Fixing",
          hatchbackPrice: 1000,
          sedanPrice: 1500,
          suvPrice: 2500,
        },
        {
          code: "GF01",
          name: "Gear Fixing",
          hatchbackPrice: 3000,
          sedanPrice: 6000,
          suvPrice: 8000,
        },
      ];
    }
  
    calculateTotalBill(carType, serviceCodes) {
      let totalBill = 0;
  
      for (let code of serviceCodes) {
        const service = this.services.find((s) => s.code === code);
  
        if (!service) {
          throw new Error(`Invalid service code: ${code}`);
        }
  
        switch (carType) {
          case "Hatchback":
            totalBill += service.hatchbackPrice;
            break;
          case "Sedan":
            totalBill += service.sedanPrice;
            break;
          case "SUV":
            totalBill += service.suvPrice;
            break;
          default:
            throw new Error(`Invalid car type: ${carType}`);
        }
      }
  
      if (totalBill > 10000) {
        totalBill += 0; // complimentary cleaning
      }
  
      return totalBill;
    }
  }
  
  // Example usage
  const station = new CarServiceStation();
  const carType = "Hatchback";
  const serviceCodes = ["BS01", "EF01"];
  
  const totalBill = station.calculateTotalBill(carType, serviceCodes);
  
  console.log(`Total bill: ₹ ${totalBill}`);