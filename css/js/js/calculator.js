const parts = {
    wheel: 800,
    spoiler: 500
};
let total = 0;

function updateCost(part) {
    total += parts[part];
    document.getElementById('total').innerText = '$' + total;
}
