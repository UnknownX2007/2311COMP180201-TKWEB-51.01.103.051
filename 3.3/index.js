document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productNameInput = document.getElementById('product-name');
    const productList = document.getElementById('product-list');

    // Khởi tạo mảng sản phẩm rỗng
    let products = [];

    // --- RENDER (Read) ---
    function renderProducts() {
        productList.innerHTML = ''; // Clear the current list
        products.forEach(product => {
            const li = document.createElement('li');
            li.setAttribute('data-id', product.id);

            // Display name
            const nameSpan = document.createElement('span');
            nameSpan.className = 'product-name-display';
            nameSpan.textContent = product.name;

            // Edit input field
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'product-edit-input';
            editInput.value = product.name;

            // Action buttons container
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';

            // Edit/Save Button
            const editButton = document.createElement('button');
            editButton.className = 'edit-btn';
            editButton.textContent = 'Sửa';
            editButton.onclick = () => toggleEdit(product.id, li, editInput);

            // Delete Button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Xóa';
            deleteButton.onclick = () => deleteProduct(product.id);

            // Assemble the list item
            actionsDiv.append(editButton, deleteButton);
            li.append(nameSpan, editInput, actionsDiv);
            productList.appendChild(li);
        });
    }

    // --- CREATE ---
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = productNameInput.value.trim();

        if (newName) {
            addProduct(newName);
            productNameInput.value = ''; // Clear input
        }
    });

    function addProduct(name) {
        const newProduct = {
            id: Date.now(), // Use timestamp as a unique ID
            name: name
        };
        products.push(newProduct);
        saveAndRender();
    }

    // --- UPDATE (Change Name) ---
    function toggleEdit(id, listItem, inputField) {
        if (listItem.classList.contains('editing')) {
            // Currently editing -> SAVE
            const newName = inputField.value.trim();
            if (newName) {
                updateProduct(id, newName);
                listItem.classList.remove('editing');
            }
        } else {
            // Not editing -> START EDIT
            listItem.classList.add('editing');
            inputField.focus();
        }
    }

    function updateProduct(id, newName) {
        const i = products.findIndex(p => p.id === id);
        if (i !== -1) {
            products[i].name = newName;
            saveAndRender();
        }
    }

    // --- DELETE ---
    function deleteProduct(id) {
        products = products.filter(product => product.id !== id);
        saveAndRender();
    }

    // --- UTILITY ---
    function saveAndRender() {
        // Re-render the list
        renderProducts();
    }

    // Initial load
    renderProducts();
});