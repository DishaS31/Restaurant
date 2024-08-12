const openBtn = document.querySelector('#open');
const menu = document.querySelector('#menu');

openBtn.addEventListener('click', () =>{
    // console.log(menu.classList.toggle('hidden'));
    menu.classList.toggle('hidden')
})

function getData() {
    const fName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const select = document.getElementById('select').value;

    const errorMessage= document.getElementById('error'); 
    errorMessage.innerText = ""
    if (!fName || !date ||!time || !select || !phone ) {
        errorMessage.innerText = 'Please fill out all fields.';
        return; 
    }
    
    // Format the message
    const message = `Hello, I am ${fName}.\nMy email is ${email}.\nI would like to book a slot on ${date} at ${time}.\nSelected option: ${select}.`;

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number (with country code, e.g., +1 for the USA)
    const phoneNumber = '7999548643';
    
    // Redirect to WhatsApp with the message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

