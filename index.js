function sendMail(){
  var params = {
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value,
  }
const serviceID="service_ammcp6d";
const templateID="template_0j532x2";

emailjs.send(serviceID,templateID,params)
.then(
  res=>{
      console.log(res);
      alert("your message sent successfully.")
  }
)
.catch((err)=> console.log(err));
}