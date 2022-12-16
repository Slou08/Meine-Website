const button1 = document.getElementById('button1')


button1.addEventListener('click', () =>{
    let name = document.querySelector('#name').value
    alert('Hallo ' + name)
})