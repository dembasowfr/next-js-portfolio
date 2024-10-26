import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  
  const [captchaValue, setCaptchaValue] = useState(null);

  const [mailData, setMailData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
    captchaValue:''
  });

  const { from_name, from_email, message, subject } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) => setMailData({ ...mailData, [e.target.name]: e.target.value });



  const onSubmit = (e) => {

    e.preventDefault();
    
    if (
      from_name.length === 0 ||
      from_email.length === 0 ||
      message.length === 0 ||
      subject.length === 0 ||
      captchaValue === null
    ) {
      // Captcha can not be empty error
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          mailData,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ from_name: '', from_email: '', subject: '', message: '', captchaValue: '' });
          },
          (err) => {
            console.log('An Error Occurred!!!', err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contactus" data-nav-tooltip="Contact Me" className="pp-section pp-scrollable section dark-bg">
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available if the right project comes along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Çamlık Mahallesi, Başak Sokak, No: 8, Çekmeköy, Istanbul, Turkiye
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">dastech1998@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+90 538 814 76 41</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="from_name"
                        onChange={(e) => onChange(e)}
                        value={from_name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${error ? (!from_name ? 'invalid' : '') : ''}`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="from_email"
                        onChange={(e) => onChange(e)}
                        value={from_email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${error ? (!from_email ? 'invalid' : '') : ''}`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${error ? (!subject ? 'invalid' : '') : ''}`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control ${error ? (!message ? 'invalid' : '') : ''}`}
                      />
                    </div>
                  </div>

                  <div className="row col-md-12 gap-4 justify-content-md-between align-items-center">
                    <div className="col-md-6 ">
                      {/* ReCAPTCHA */}
                      <ReCAPTCHA
                        id = "google-captcha"
                        theme="dark"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(value) => setCaptchaValue(value)}
                        className={`google-captcha ${error ? (captchaValue ? 'invalid' : '') : ''}`}
                      />
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                      <div className="d-md-flex justify-content-md-between align-items-center">
                        <div>
                          <div className="send">
                            <input className="px-btn px-btn-theme" type="submit" value="send message" />
                          </div>
                        </div>
                        <div className="d-flex mx-4 my-2">
                          <span
                            id="suce_message"
                            className="text-success"
                            style={{
                              display: error !== null ? (!error ? 'block' : 'none') : 'none',
                            }}
                          >
                            Message Sent Successfully!!!
                          </span>
                          <span id="err_message" className="text-danger" style={{ display: 'none' }}>
                            Message Sending Failed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="d-flex md:col justify-content-between align-items-center">
                    <div>
                     
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(value) => setCaptchaValue(value)}
                        className={`${error ? (captchaValue ? 'invalid' : '') : ''}`}
                      />
                    </div>
                    <div>
                      <div className="send">
                        <input className="px-btn px-btn-theme" type="submit" value="send message" />
                      </div>
                      <div className="d-flex mx-4 my-2">
                        <span
                          id="suce_message"
                          className="text-success"
                          style={{
                            display: error !== null ? (!error ? 'block' : 'none') : 'none',
                          }}
                        >
                          Message Sent Successfully!!!
                        </span>
                        <span id="err_message" className="text-danger" style={{ display: 'none' }}>
                          Message Sending Failed
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
             
                <iframe
                  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96250.2436630593!2d29.187350576576875!3d41.072924568226775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad2e51ddddf97%3A0xee27abe63246e12a!2zw4dla21la8O2eS_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1729957958300!5m2!1sen!2str"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Contact;
