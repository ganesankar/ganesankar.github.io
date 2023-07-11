
export const HomePage = () => {
  const numbers = [
    {
      icon: "lab la-wordpress",
      title: "Website",
      url: "https://www.ganesan.dev/",
    },
    {
      icon: "lab la-facebook",
      title: "Facebook",
      url: "https://www.facebook.com/ganesankars",
    },
    {
      icon: "lab la-instagram",
      title: "Instagram",
      url: "https://instagram.com/ganesankar",
    },
    {
      icon: "lab la-linkedin",
      title: "Linkedin",
      url: "https://linkedin.com/in/ganesankar",
    },
    {
      icon: "lab  la-snapchat",
      title: "SnapChat",
      url: "https://www.snapchat.com/add/ganesankar",
    },
    {
      icon: "lab  la-whatsapp",
      title: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=919943732416",
    },
    {
      icon: "lab  la-twitter",
      title: "Twitter",
      url: "https://twitter.com/ganesankar",
    },
    {
      icon: "lab  la-telegram",
      title: "Telegram",
      url: "https://t.me/ganesankar",
    },
    {
      icon: "lab la-github",
      title: "Github",
      url: "https://github.com/ganesankar",
    },
    {
      icon: "lab la-skype",
      title: "skype",
      url: "skype:ganesan.intech",
    },
  ];
  const listItems = numbers.map((item) => (
    <a href={item.url} target="_blank" title={item.title} rel="noreferrer">
      {" "}
      <i className={item.icon}></i>
    </a>
  ));
  return (
    <div className="wrapperc">
     
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 ">
          <div className="section-container">
            <div className="section">
              <div className="card-container">
                <img
                  className="round"
                  src="https://pbs.twimg.com/profile_images/1567036947721498625/VsBNh6ho_400x400.jpg"
                  alt="user"
                />
                <h3>Ganesan Karuppaiya</h3>
                <h6>Chennai -India</h6>
                <p>
                  Full Stack Lead Developer &amp; <br /> User Interface Designer{" "}
                </p>
                <div className="buttons">
                  <a className="primary " href="mailto:ganesank@live.com">
                    <i className="las la-envelope"></i> Mail
                  </a>{" "}
                  &nbsp;
                  <a className="primary ghost" href="tel:+919943732416">
                    <i className="las la-phone"></i> Call
                  </a>{" "} 
                </div>
              </div>
              <div className="social">
                <div className="pure-g ">
                 {listItems}
                  <div className="pure-u-1-4 pure-u-md-1-4 pure-u-lg-1-5 box"></div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-4 pure-u-lg-1-3"></div>
      </div>
    </div>
  );
};
