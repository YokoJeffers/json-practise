document.addEventListener('DOMContentLoaded', () => {
  fetch('data/product.json')
    .then(res => res.json())
    .then(tab => {
      const productTable = document.getElementById('productTable');
      for (let i = 0; i < tab.length; i++) {
        const product = tab[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td>${product.description}</td>`;
        productTable.appendChild(tr);
      }
    })
    .catch(error => console.error('エラー：', error));
})