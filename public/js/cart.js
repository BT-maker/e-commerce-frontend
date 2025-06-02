function updateQuantity(inputElement) {
  const id = inputElement.dataset.itemId;
  const value = inputElement.value;
  // Miktar güncelleme işlemi
  console.log("Ürün ID:", id, "Yeni Miktar:", value);
}

function decreaseQuantity(buttonElement) {
  const id = buttonElement.dataset.itemId;
  const input = buttonElement.parentElement.querySelector(
    'input[type="number"]'
  );
  if (input.value > 1) {
    input.value = parseInt(input.value) - 1;
    updateQuantity(input);
  }
}

function increaseQuantity(buttonElement) {
  const id = buttonElement.dataset.itemId;
  const input = buttonElement.parentElement.querySelector(
    'input[type="number"]'
  );
  const max = parseInt(input.getAttribute("max"));
  if (input.value < max) {
    input.value = parseInt(input.value) + 1;
    updateQuantity(input);
  }
}

function removeItem(buttonElement) {
  const id = buttonElement.dataset.itemId;
  // Ürün silme işlemi
  console.log("Silinecek Ürün ID:", id);
}
