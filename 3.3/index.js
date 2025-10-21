let products = ["Samsung Galaxy Ultra", "Iphone 17 Pro Max", "Lenovo"];
        function renderProducts() {
            let productListDiv = document.getElementById("product-list");
            productListDiv.innerHTML = ""; 
            for (let i = 0; i < products.length; i++) {
                productListDiv.innerHTML += `
                    <p>
                        ${i + 1}. ${products[i]}
                        <button onclick="editProduct(${i})">Sửa</button>
                        <button onclick="deleteProduct(${i})">Xóa</button>
                    </p>
                `;
            }
        }
        function addProduct() {
            let input = document.getElementById("new-product-name");
            let productName = input.value; 
            if (productName) {
                products.push(productName); 
                input.value = ""; 
                renderProducts();
            }
        }
        function editProduct(index) {
            let oldName = products[index];
            let newName = prompt("Nhập tên mới cho sản phẩm:", oldName);
            if (newName) {
                products[index] = newName; 
                renderProducts(); 
            }
        }
        function deleteProduct(index) {
            products.splice(index, 1); 
            renderProducts(); 
        }
        renderProducts();