window.addEventListener('DOMContentLoaded', () => {
    items = document.querySelectorAll('.systems_item_card');
    radio1 = document.querySelectorAll('.form_group2_radiochecks_check');
    radio2 = document.querySelectorAll('.form_group2_radiochecks_checked');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.className = 'systems_item_card_active';
        });
        item.addEventListener('mouseout', () => {
            item.className = 'systems_item_card';
        });
    })

    radio1.forEach(item => {
        item.addEventListener('click', () => {
            if (item.className == 'form_group2_radiochecks_checked')
            {
                item.className = 'form_group2_radiochecks_check';
                document.getElementsByName('radio'+item.id).value=0;
            }
            else
            {
                item.className = 'form_group2_radiochecks_checked';
                document.getElementsByName('radio'+item.id).value=1;
            }
        });
    })

    radio2.forEach(item => {
        item.addEventListener('click', () => {
            if (item.className == 'form_group2_radiochecks_checked')
            {
                item.className = 'form_group2_radiochecks_check';
                document.getElementsByName('radio'+item.id).value=0;
            }
            else
            {
                item.className = 'form_group2_radiochecks_checked';
                document.getElementsByName('radio'+item.id).value=1;
            }
        });
    })
})