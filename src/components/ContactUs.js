import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
        <div id="contactUsPage" className="special">
        <div className="card flex-row flex-wrap">
          <div className="card-body contact-text">
            <h3 className="card-title">Contact Info</h3>
            <h5 className="card-content"><u>address:</u><br/> 216 1st st.
            Union City, TN 38260 <br/>
            <u>phone:</u><br/> +1-731-885-0000 <br/>
            <u>email:</u><br/> YourRestaurant@email.com</h5>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1605.1983834671769!2d-89.05770020608152!3d36.42378759832993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88796d7868d2d85f%3A0x6355caea18da723b!2s216%20S%201st%20St%2C%20Union%20City%2C%20TN%2038261!5e0!3m2!1sen!2sus!4v1591375949982!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
    );
  }
}

export default ContactUs;
