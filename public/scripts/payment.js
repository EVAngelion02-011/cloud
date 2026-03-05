// read query parameters from URL and display them
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('product-name').textContent = getQueryParam('product');
    document.getElementById('amount').textContent = getQueryParam('amount');

    document.getElementById('ok').addEventListener('click', () => {
        window.location.href = '/';
    });
});