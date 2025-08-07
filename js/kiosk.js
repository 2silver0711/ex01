const cart = {};

const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");

// 메뉴 클릭 → 장바구니에 추가
menu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button && button.classList.contains("menu-button")) {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));

    if (cart[name]) {
      cart[name].count++;
    } else {
      cart[name] = { price, count: 1 };
    }

    updateCart();
  }
});

// 장바구니 UI 업데이트
function updateCart() {
  cartDisplay.innerHTML = "";
  let total = 0;

  for (const name in cart) {
    const { price, count } = cart[name];
    const itemTotal = price * count;
    total += itemTotal;

    const item = document.createElement("div");
    item.className = "cart-item";

    const info = document.createElement("div");
    info.className = "cart-info";
    info.textContent = `${name} x${count}개 - ${itemTotal.toLocaleString()}원`;

    const controls = document.createElement("div");
    controls.className = "controls";

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "➕";
    plusBtn.onclick = () => {
      cart[name].count++;
      updateCart();
    };

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "➖";
    minusBtn.onclick = () => {
      cart[name].count--;
      if (cart[name].count <= 0) {
        delete cart[name];
      }
      updateCart();
    };

    controls.appendChild(minusBtn);
    controls.appendChild(plusBtn);

    item.appendChild(info);
    item.appendChild(controls);

    cartDisplay.appendChild(item);
  }

  totalDisplay.textContent = total.toLocaleString();
}