export default function showContact() {
  console.log('showContact module');
  let divMenu = document.createElement('div')
  divMenu.innerHTML = `
    <div id="middleContent">MIDDLE container
      <div>Contact us</div>
      <div>We'd love to hear from you! At SisBrew, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:</div>
      <div>Email: sisbrewcoffeeandtea@gmail.com</div>
      <div>Phone: 083 552 5503</div>
      <div>Address: Bulaong Terminal, General Santos City, Philippines,</div>
      <div> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.133250709257!2d125.16011341476842!3d6.112756795573847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79f789cc98701%3A0x20f47e1eaba3a4c3!2sSisBrew%20Coffee%20and%20Tea!5e0!3m2!1sen!2sph!4v1688807253107!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  `
  return divMenu;
}