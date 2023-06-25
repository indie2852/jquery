$(document).ready(function() {
  const storeItems = [
    {
      name: 'TV',
      price: 800.00,
      inStock: true,
      details: '4K Ultra HD'
    },
    {
      name: 'Phone',
      price: 700.00,
      inStock: false,
      details: '5G'
    },
    {
      name: 'Game Console',
      price: 300.00,
      inStock: true,
      details: 'The latest and greatest'
    },
    {
      name: 'Laptop',
      price: 1200.00,
      inStock: true,
      details: '16GB RAM 1TB SSD'
    },
    {
      name: 'Smart Watch',
      price: 200.00,
      inStock: false,
      details: 'Counts your steps'
    },
    {
      name: 'Headphones',
      price: 100.00,
      inStock: true,
      details: 'Clearest music to be heard'
    },
    {
      name: 'Keyboard',
      price: 100.00,
      inStock: true,
      details: 'Types for you'
    },
    {
      name: 'HDMI Cord',
      price: 100.00,
      inStock: true,
      details: 'HDMI to USB type C'
    },
    {
      name: 'Monitor',
      price: 300.00,
      inStock: true,
      details: '4K Ultra HD'
    },
    {
      name: 'Speaker',
      price: 200.00,
      inStock: true,
      details: 'Clearest music to be heard'
    },
    {
      name: 'Video Game',
      price: 60.00,
      inStock: true,
      details: 'Enjoy for hours'
    },
  ];

  function populateProductList() {
    const productList = $('#product-list');
    productList.empty();

    for (let i = 0; i < storeItems.length; i++) {
      const item = storeItems[i];

      if (item.inStock) {
        const row = $('<tr></tr>');

        const nameCell = $('<td></td>').text(item.name);
        const priceCell = $('<td></td>').text(item.price.toFixed(2));
        const detailsCell = $('<td></td>').text(item.details);

        row.append(nameCell, priceCell, detailsCell);
        productList.append(row);
      }
    }
  }

  populateProductList();

  $('#dark-mode-checkbox').change(function() {
    $('body').toggleClass('dark-mode', $(this).prop('checked'));
  });
});
