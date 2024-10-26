window.addEventListener('DOMContentLoaded', function()  {
    const featuresItem = Array.from(document.querySelectorAll(".features-item"));
    featuresItem.forEach((item, index, arr) => {
        item.addEventListener('click', function() {
            arr.forEach(itemChild => {
                itemChild.classList.remove('active');
            });
            item.classList.add('active');
        })
    })
})