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

function loadFile(url) {
    let localTest = /^(?:file):/,
        xmlhttp = new XMLHttpRequest(),
        status = 0;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4)
            status = xmlhttp.status;

        if (localTest.test(location.href) && xmlhttp.responseText)
            status = 200;

        if (xmlhttp.readyState === 4 && status === 200)
            mainView.innerHTML = xmlhttp.responseText;
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

