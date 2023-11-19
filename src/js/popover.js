export default function Popover() {
    const button = document.getElementById('btn');

    button.addEventListener('click', () => {
        const activeTooltip = document.querySelector('.tooltip');
        console.log(activeTooltip);
        
        if (activeTooltip === null) {
            button.classList.remove('noactive');
            button.classList.add('active');
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');

            const title = document.createElement('h3');
            title.classList.add('title');
            title.textContent = "Popover title";

            const text = document.createElement('div');
            text.classList.add('text');
            text.textContent = "And here's some amazing content. It's very engaging. Right?";

            tooltip.prepend(title);
            tooltip.append(text);
            document.body.append(tooltip);

            const { left } = button.getBoundingClientRect();

            tooltip.style.bottom =
            tooltip.offsetHeight + button.offsetHeight + 10 + 'px';
            tooltip.style.left =
            left + (button.offsetWidth - tooltip.offsetWidth) / 2 - 8 + 'px';
            
        } else {
            activeTooltip.remove();
            button.classList.remove('active');
            button.classList.add('noactive');
        };
    });
};