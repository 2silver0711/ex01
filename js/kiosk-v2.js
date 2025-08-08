const cart = {};

// 카테고리 탭 전환 함수
function showCategory(category) {
  // 모든 메뉴 카테고리 숨기기
  const sections = document.querySelectorAll(".menu-category");
  sections.forEach(section => section.style.display = "none");

  // 해당 카테고리 보여주기
  const target = document.querySelector(`.menu-category[data-category="${category}"]`);
  if (target) {
    target.style.display = "flex";
  }

  // 탭 버튼 highlight 처리
  const tabButtons = document.querySelectorAll("#tabs button");
  tabButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    }
  });
}

// 장바구니 UI 업데이트
function updateCartUI() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  let total = 0;

  Object.keys(cart).forEach(name => {
    const { price, quantity } = cart[name];
    total += price * quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <div class="cart-info">
        <strong>${name}</strong><br>
        ${price.toLocaleString()}원 × ${quantity}
      </div>
      <div class="controls">
        <button onclick="changeQty('${name}', -1)">-</button>
        <button onclick="changeQty('${name}', 1)">+</button>
        <button onclick="removeItem('${name}')">삭제</button>
      </div>
    `;
    cartDiv.appendChild(itemDiv);
  });

  document.getElementById("total").textContent = total.toLocaleString();
}

// 수량 변경
function changeQty(name, diff) {
  if (cart[name]) {
    cart[name].quantity += diff;
    if (cart[name].quantity <= 0) delete cart[name];
    updateCartUI();
  }
}

// 항목 삭제
function removeItem(name) {
  delete cart[name];
  updateCartUI();
}

// 장바구니 비움
function clearCart() {
  for (let key in cart) {
    delete cart[key];
  }
  updateCartUI();
}

// 모달 열기/닫기
function showModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.remove("hidden");
}

function hideModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.add("hidden");
}

// 초기 실행
window.onload = () => {
  // 초기에 burger 탭 선택
  showCategory("burger");

  // 탭 버튼 클릭 이벤트 연결
  const tabButtons = document.querySelectorAll("#tabs button");
  tabButtons.forEach(btn => {
    const category = btn.dataset.category;
    btn.addEventListener("click", () => showCategory(category));
  });

  // 메뉴 버튼 클릭 시 장바구니에 추가
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price, 10);

      if (!cart[name]) {
        cart[name] = { price, quantity: 1 };
      } else {
        cart[name].quantity++;
      }

      updateCartUI();
    });
  });

  // 삭제 및 결제 버튼 이벤트 연결
  const clearBtn = document.getElementById("clearCart");
  const checkoutBtn = document.getElementById("checkout");
  const closeBtn = document.getElementById("closeModal");

  if (clearBtn) {
    clearBtn.addEventListener("click", clearCart);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (Object.keys(cart).length === 0) {
        alert("장바구니가 비어 있어요!");
        return;
      }

      showModal();
      clearCart();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", hideModal);
  }
};
