const mainView = document.getElementById('MainView');

const masterServMan = document.querySelector('#home').childNodes;
const searchOptions = document.getElementById('SearchOption').childNodes;
const nodes = [...masterServMan]
const searchNodes = [...searchOptions]

const loadMaster = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    nodes.forEach(child => {
        mainView.appendChild(child)
    })

    const view = document.getElementById('View');
    if (view && view.hasChildNodes()) view.innerHTML = '';

    searchNodes.forEach(child => {
        view.appendChild(child)
    })
}

window.onload = loadMaster

const tsbsNodes = [...document.getElementById('tsbs').childNodes]
const loadTsbs = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    tsbsNodes.forEach(child => {
        mainView.appendChild(child)
    })
}

const faultCodeNodes = [...document.getElementById('faultcode').childNodes]
const loadFaultCodes = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    faultCodeNodes.forEach(child => {
        mainView.appendChild(child)
    })
}

const troubleixCodeNodes = [...document.getElementById('troubleix').childNodes]
const loadTroubleix = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    troubleixCodeNodes.forEach(child => {
        mainView.appendChild(child)
    })
}

const circuitixCodeNodes = [...document.getElementById('circuitix').childNodes]
const loadCircuitix = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    circuitixCodeNodes.forEach(child => {
        mainView.appendChild(child)
    })
}

const repairTimesCodeNodes = [...document.getElementById('repairTimes').childNodes]
const loadRepairTimes = () => {
    if (mainView && mainView.hasChildNodes()) mainView.innerHTML = '';

    repairTimesCodeNodes.forEach(child => {
        mainView.appendChild(child)
    })
}