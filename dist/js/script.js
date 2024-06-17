const servicesList = [
  {
    id: 1,
    icon: "smartphone-charging",
    desc: "Buy/Sell Airtime",
  },
  {
    id: 2,
    icon: "smartphone-charging",
    desc: "Buy/Sell Airtime",
  },
  {
    id: 3,
    icon: "smartphone-charging",
    desc: "Buy/Sell Airtime",
  },
];

const servicesItem = document.querySelector("servicesList");

const showInHTML = servicesList.map(() => {
  return `
    <div class="grid place-items-center">
        <div class="p-2 rounded bg-red-50 w-fit">
            <i
            data-lucide="smartphone-charging"
            class="w-8 h-8 text-primary"
            ></i>
        </div>
        <p class="text-[8px] font-semibold text-center mt-2">Buy/Sell Airtime</p>
    </div>
    `;
});

servicesItem.innerHTML = showInHTML;
