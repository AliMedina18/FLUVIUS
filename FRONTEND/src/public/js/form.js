document.addEventListener("DOMContentLoaded", function() {
    let step = 1;
    const formData = {
      showerMinutes: '',
      faucetMinutes: '',
      dishWashing: '',
      laundry: '',
      ownCar: '',
      carWash: '',
      porkConsumption: '',
      chickenConsumption: '',
      beefConsumption: '',
      milkConsumption: '',
      sodaJuiceConsumption: '',
      cubicMeters: '',
      billAmount: '',
      rationingDays: ''
    };
    const steps = [
      {
        title: "Housing",
        fields: [
          { id: "showerMinutes", label: "Minutes showering per day", type: "number" },
          { id: "faucetMinutes", label: "Minutes the kitchen faucet is running daily", type: "number" },
          { id: "dishWashing", label: "Times washing dishes by hand per week", type: "number" },
          { id: "laundry", label: "Times doing laundry per week", type: "number" }
        ]
      },
      {
        title: "Car Usage",
        fields: [
          { id: "ownCar", label: "Do you own a car?", type: "select", options: ["Yes", "No"] },
          { id: "carWash", label: "Times washing car per month", type: "number" }
        ]
      },
      {
        title: "Dietary Habits",
        fields: [
          { id: "porkConsumption", label: "Kilograms of pork consumed per month", type: "number" },
          { id: "chickenConsumption", label: "Kilograms of chicken consumed per month", type: "number" },
          { id: "beefConsumption", label: "Kilograms of beef consumed per month", type: "number" }
        ]
      },
      {
        title: "Beverage Consumption",
        fields: [
          { id: "milkConsumption", label: "Liters of milk consumed per month", type: "number" },
          { id: "sodaJuiceConsumption", label: "Liters of sodas and juices consumed per month", type: "number" }
        ]
      },
      {
        title: "Additional Information",
        fields: [
          { id: "cubicMeters", label: "Cubic meters of water consumed", type: "number" },
          { id: "billAmount", label: "Water bill amount (COP)", type: "number" },
          { id: "rationingDays", label: "Days of water rationing", type: "number" }
        ]
      }
    ];
  
    function renderStep() {
      const stepContent = document.getElementById("step-content");
      stepContent.innerHTML = `
        <h3 class="text-lg font-semibold mb-4">${steps[step - 1].title}</h3>
        <div class="space-y-4">
          ${steps[step - 1].fields.map(field => {
            if (field.type === "select") {
              return `
                <div class="space-y-2">
                  <label for="${field.id}" class="block text-sm font-medium">${field.label}</label>
                  <select id="${field.id}" name="${field.id}" class="block w-full border rounded">
                    ${field.options.map(option => `<option value="${option}">${option}</option>`).join('')}
                  </select>
                </div>
              `;
            } else {
              return `
                <div class="space-y-2">
                  <label for="${field.id}" class="block text-sm font-medium">${field.label}</label>
                  <input type="${field.type}" id="${field.id}" name="${field.id}" class="block w-full border rounded" />
                </div>
              `;
            }
          }).join('')}
        </div>
      `;
    }
  
    function calculateResults() {
      // Conversion y cálculo similar al de React.
      // Recoger valores desde el formulario y hacer el cálculo del footprint.
    }
  
    // Navegación entre pasos.
    document.getElementById("next-step").addEventListener("click", function() {
      if (step < 5) {
        step++;
        renderStep();
      } else {
        calculateResults();
      }
    });
  
    document.getElementById("prev-step").addEventListener("click", function() {
      if (step > 1) {
        step--;
        renderStep();
      }
    });
  
    // Inicialización.
    renderStep();
  });
  