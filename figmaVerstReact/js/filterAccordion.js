export function initFilterAccordion() {
    const filterGroups = document.querySelectorAll('.filter-group');

    filterGroups.forEach(group => {
        const header = group.querySelector('.filter-group__header');
        if (header) {
            header.addEventListener('click', () => {
                group.classList.toggle('active');
            });
        }
    });
}