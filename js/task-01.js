const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`)

const category = document.querySelectorAll('.item');

for (let index = 0; index < categories.children.length; index += 1) {
        
    console.log(`Category: ${category[index].firstElementChild.textContent}`);

    console.log(`Elements: ${category[index].lastElementChild.children.length}`);
}