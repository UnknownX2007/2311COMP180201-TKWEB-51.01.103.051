document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productNameInput = document.getElementById('product-name');
    const productList = document.getElementById('product-list');

    let products = [];

    function renderProducts() {
        productList.innerHTML = ''; list
        products.forEach(product => {
            const li = document.createElement('li');
            li.setAttribute('data-id', product.id);

                   const nameSpan = document.createElement('span');
            nameSpan.className = 'product-name-display';
            nameSpan.textContent = product.name;

                       const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'product-edit-input';
            editInput.value = product.name;
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';

                       const editButton = document.createElement('button');
            editButton.className = 'edit-btn';
            editButton.textContent = 'Sửa';
            editButton.onclick = () => toggleEdit(product.id, li, editInput);

                    const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Xóa';
            deleteButton.onclick = () => deleteProduct(product.id);

            actionsDiv.append(editButton, deleteButton);
            li.append(nameSpan, editInput, actionsDiv);
            productList.appendChild(li);
        });
    }

     productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = productNameInput.value.trim();

        if (newName) {
            addProduct(newName);
            productNameInput.value = '';   }
    });

    function addProduct(name) {
        const newProduct = {
            id: Date.now(),  unique ID
            name: name
        };
        products.push(newProduct);
        saveAndRender();
    }
    function toggleEdit(id, listItem, inputField) {
        if (listItem.classList.contains('editing')) {
            const newName = inputField.value.trim();
            if (newName) {
                updateProduct(id, newName);
                listItem.classList.remove('editing');
            }
        } else {
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

     function deleteProduct(id) {
        products = products.filter(product => product.id !== id);
        saveAndRender();
    }

      function saveAndRender() {
        
        renderProducts();
    }

    enderProducts();
});