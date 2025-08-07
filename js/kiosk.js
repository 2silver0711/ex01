// 🛒 장바구니 데이터를 저장할 객체 (상품 이름을 키로 사용)
const cart = {};

// 📌 HTML에서 요소 가져오기
const menu = document.querySelector("#menu");          // 메뉴 버튼들을 담은 영역
const cartDisplay = document.querySelector("#cart");   // 장바구니 보여줄 영역
const totalDisplay = document.querySelector("#total"); // 총 금액 보여줄 영역

//  메뉴 버튼 클릭 시 실행될 함수
menu.addEventListener("click", (event) => {
  // 사용자가 클릭한 요소(button이 아닐 수도 있음)를 button까지 끌어올림
  const button = event.target.closest("button");

  // 만약 실제로 메뉴 버튼(menu-button 클래스)이면 아래 실행
  if (button && button.classList.contains("menu-button")) {
    const name = button.getAttribute("data-name");          // 상품 이름
    const price = parseInt(button.getAttribute("data-price")); // 가격 (문자열을 숫자로 변환)

    // 이미 장바구니에 있는 상품이면 수량만 +1
    if (cart[name]) {
      cart[name].count++;
    } else {
      // 없으면 새로 추가 (가격, 수량 1개로 시작)
      cart[name] = { price, count: 1 };
    }

    updateCart(); // UI 새로 그리기
  }
});

// 🔁 장바구니와 총합계를 화면에 업데이트하는 함수
function updateCart() {
  cartDisplay.innerHTML = ""; // 장바구니 화면 비우기 (매번 새로 그림)
  let total = 0;              // 총합 초기화

  // 🧾 장바구니(cart) 안에 있는 상품들 하나씩 처리
  for (const name in cart) {
    const { price, count } = cart[name];          // 상품 가격, 수량 꺼내기
    const itemTotal = price * count;              // 해당 상품 총액
    total += itemTotal;                           // 총합 누적

    // 🔸 각 상품 하나를 나타내는 <div> 생성
    const item = document.createElement("div");
    item.className = "cart-item";

    // 📄 상품 이름 + 수량 + 금액을 표시할 <div>
    const info = document.createElement("div");
    info.className = "cart-info";
    info.textContent = `${name} x${count}개 - ${itemTotal.toLocaleString()}원`;
    // toLocaleString(): 1500 → "1,500" 처럼 표시해줌

    // ➕➖ 수량 조절 버튼들이 들어갈 <div>
    const controls = document.createElement("div");
    controls.className = "controls";

    // ➕ 버튼 생성
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "➕";
    plusBtn.onclick = () => {
      cart[name].count++;   // 수량 1 증가
      updateCart();         // 다시 화면 새로 그림
    };

    // ➖ 버튼 생성
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "➖";
    minusBtn.onclick = () => {
      cart[name].count--;   // 수량 1 감소
      if (cart[name].count <= 0) {
        delete cart[name];  // 수량 0이면 장바구니에서 삭제
      }
      updateCart();         // 다시 화면 새로 그림
    };

    // ➕➖ 버튼을 controls에 넣기
    controls.appendChild(minusBtn);
    controls.appendChild(plusBtn);

    // 상품 정보와 버튼들을 item에 넣기
    item.appendChild(info);
    item.appendChild(controls);

    // 완성된 item을 장바구니(cartDisplay)에 넣기
    cartDisplay.appendChild(item);
  }

  // 💰 총 금액 표시
  totalDisplay.textContent = total.toLocaleString(); // 예: 8500 → "8,500"
}

// 전체 비우기 버튼
const clearBtn = document.querySelector("#clearCart");
clearBtn.addEventListener("click", () => {
  if (confirm("정말로 장바구니를 비우시겠습니까?")) {
    for (const name in cart) delete cart[name];
    updateCart();
  }
});

const checkoutBtn = document.querySelector("#checkout");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");

checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("장바구니가 비어 있습니다!");
    return;
  }
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  // 장바구니 비우기
  for (const name in cart) delete cart[name];
  updateCart();
});

document.getElementById("checkout").addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    alert("장바구니가 비어 있습니다!");
    return;
  }

  // 1. 모달 보여주기
  document.getElementById("modal").classList.remove("hidden");

  // 2. 주문 정보 localStorage 저장
  localStorage.setItem("order", JSON.stringify(cart));

  // 3. 1초 후 receipt.html로 이동
  setTimeout(() => {
    window.location.href = "receipt.html";
  }, 1000);
});