(function () {
    const initAbstracts = () => {
        document.querySelectorAll('.abstract-header').forEach(header => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const isExpanded = content.style.display === 'block';

                content.style.display = isExpanded ? 'none' : 'block';
                this.classList.toggle('expanded');
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAbstracts);
    } else {
        initAbstracts();
    }
})();
