window.addEventListener('DOMContentLoaded', () => {
    items = document.querySelectorAll('.systems_item_card');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.toggle('active');
            item.className = 'systems_item_card_active';
        });
        item.addEventListener('mouseout', () => {
            item.classList.toggle('active');
            item.className = 'systems_item_card';
        });
    })
})