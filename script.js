document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.dataset.keyword === "all") {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
                cards.forEach(card => card.style.display = "block");
                return;
            }

            this.classList.toggle("active");

            const activeFilters = Array.from(filterButtons)
                .filter(btn => btn.classList.contains("active"))
                .map(btn => btn.dataset.keyword);

            cards.forEach(card => {
                const keywords = card.dataset.keywords.split(" ");
                card.style.display = activeFilters.some(filter => keywords.includes(filter)) ? "block" : "none";
            });
        });
    });
});
