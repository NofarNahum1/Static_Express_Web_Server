function navigate(page) {
    window.location.href = page;
}

async function incrementCount() {
    const response = await fetch('/click-count', { method: 'POST' });
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.count;
}

async function loadClickCount() {
    const response = await fetch('/click-count');
    const data = await response.json();
    document.getElementById('clickCount').innerText = data.count;
}

window.onload = loadClickCount;
