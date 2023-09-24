export function typeWriter(
    element: HTMLElement,
    text: string,
    speed: number,
    delay: number = 0
) {
    let i = 0;
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
        if (i === text.length) {
            return true;
        }
    };
    setTimeout(type, delay);
}
