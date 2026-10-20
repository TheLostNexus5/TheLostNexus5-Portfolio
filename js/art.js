const cards = document.querySelectorAll('.card-obj-smaller')
const artobjs = document.querySelectorAll('.art-obj')
const card_containers = document.querySelectorAll('.card-container')
const navigation_layers = document.querySelectorAll('.navigation-layer')

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