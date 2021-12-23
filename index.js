//function to add images
function newImage(source, left, bottom) {
    let object = document.createElement('img')
    object.src = source
    object.style.position = 'fixed'
    object.style.left = left
    object.style.bottom = bottom
    document.body.append(object)
}

//insertion of images
newImage('assets/green-character.gif', '100px', '100px');

newImage('assets/pine-tree.png', '450px', '200px');

newImage('assets/tree.png', '200px', '300px');

newImage('assets/crate.png', '150px', '200px');

newImage('assets/pillar.png', '350px', '100px');

newImage('assets/well.png', '500px', '425px');


//function to add items and make them disapear with a double-click
function newItem(source, left, bottom) {
    let object = document.createElement('img')
    object.src = source
    object.style.position = 'fixed'
    object.style.left = left
    object.style.bottom = bottom
    document.body.append(object)

object.addEventListener('dblclick', function(){
    object.remove()
})
}

//insertion of items
newItem('assets/sword.png', '500px', '405px');

newItem('assets/sheild.png', '165px', '185px');

newItem('assets/staff.png', '600px', '100px');





