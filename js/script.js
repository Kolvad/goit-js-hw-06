
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ulRef = document.createElement('ul');

const liListRef = technologies.map((name) => {
    const liRef = document.createElement('li');
    liRef.textContent = name;
    return liRef;
});

ulRef.append(...liListRef);
console.log(ulRef);

document.body.append(ulRef);