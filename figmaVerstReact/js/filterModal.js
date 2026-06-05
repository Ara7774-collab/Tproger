export function initFilterModal() {
    const openFilterBtn = document.getElementById('openFilterBtn');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const filterModal = document.getElementById('filterModal');

    if (openFilterBtn && closeFilterBtn && filterModal) {
        openFilterBtn.addEventListener('click', () => {
            filterModal.classList.add('active');
        });

        closeFilterBtn.addEventListener('click', () => {
            filterModal.classList.remove('active');
        });
    }
}