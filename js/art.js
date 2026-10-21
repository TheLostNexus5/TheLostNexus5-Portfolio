const cards = document.querySelectorAll('.card-obj-smaller')
const artobjs = document.querySelectorAll('.art-obj')
const artimgs = document.querySelectorAll('.art-obj img')
const card_containers = document.querySelectorAll('.card-container')
const navigation_layers = document.querySelectorAll('.navigation-layer')
const art_obs = document.querySelector('.art-observation-container')
const art_image = document.querySelector('.art-showcase-image')
const art_scrollcontainer = document.querySelector('.art-observation-scrollcontainer')
const art_name = document.getElementById("art-name")

let path = ["Root"]

function move_to_layer(selectedTag, buttonElement) {
    cards.forEach(card => {
        if (card.getAttribute('category') === selectedTag) {
            card.classList.remove('is-hidden');
        } else {
            card.classList.add('is-hidden');
        }
    });
    artobjs.forEach(card => {
        if (card.getAttribute('category') === selectedTag) {
            card.classList.remove('is-hidden');
        } else {
            card.classList.add('is-hidden');
        }
    });
    const matching_tag = path.find(entry => entry.toLowerCase() === selectedTag.toLowerCase());
    if (matching_tag) {
        navigation_layers.forEach(layer => {
            if (layer.getAttribute('category') && layer.getAttribute('category') != selectedTag) {
                if (path.indexOf(layer.getAttribute('category')) > path.indexOf(selectedTag)) {
                    layer.classList.remove('is-visible')
                }
            }
        });
        path = truncateAfter(path, selectedTag);
    } else {
        path.push(selectedTag)
        navigation_layers.forEach(layer => {
            if (selectedTag === layer.getAttribute('category')) {
                layer.classList.add('is-visible')
            }
        });
    }
    
}
function truncateAfter(arr, target, index = 0) {
  if (index >= arr.length) return []; 
  if (arr[index] === target) return [arr[index]]; 
  return [arr[index], ...truncateAfter(arr, target, index + 1)];
}

artimgs.forEach(artobj => {
    artobj.addEventListener('click', function(event) {
        art_obs.classList.add('show-art')
        art_image.setAttribute('src', artobj.getAttribute('src'))
        art_name.textContent = artobj.getAttribute('art-name')
        art_scrollcontainer.scrollTo(0, 0);
    });
});
art_obs.addEventListener('click', function(event) {
    art_obs.classList.remove('show-art')
})