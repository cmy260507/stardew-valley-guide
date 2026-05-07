document.addEventListener('DOMContentLoaded', function() {
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');

    seasonTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const season = this.getAttribute('data-season');
            seasonTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            seasonContents.forEach(c => c.classList.remove('active'));
            document.getElementById(season).classList.add('active');
        });
    });
});
