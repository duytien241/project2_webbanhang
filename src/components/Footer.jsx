import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
      <footer className="footer">
        <div className="footer_content">
          <div className="container">
            <div className="row">
              {/* About */}
              <div className="col-lg-4 footer_col">
                <div className="footer_about">
                  <div className="footer_logo">
                    <a href="#">
                      <div className="d-flex flex-row align-items-center justify-content-start">
                        <div className="footer_logo_icon"><img src={require("../images/logo_2.png")} alt /></div>
                        <div>Cửa Hàng Thời Trang</div>
                      </div>
                    </a>        
                  </div>
                  <div className="footer_about_text">
                    <p>Chúng tôi cam đoan mang đến những mặt hàng chất lượng nhất, phù hợp nhất đến với khách hàng.</p>
                  </div>
                </div>
              </div>
              {/* Footer Links */}
              <div className="col-lg-4 footer_col">
                <div className="footer_menu">
                  <div className="footer_title">Hỗ trợ</div>
                  <ul className="footer_list">
                    <li>
                      <a href="#"><div>Dịch vụ khách hàng<div className="footer_tag_1">Trực tuyến</div></div></a>
                    </li>
                    <li>
                      <a href="#"><div>Chính sách</div></a>
                    </li>
                    <li>
                      <a href="#"><div>Hướng dẫn kích cỡ<div className="footer_tag_2">Giới thiệu</div></div></a>
                    </li>
                    <li>
                      <a href="#"><div>Điều khoản</div></a>
                    </li>
                    <li>
                      <a href="#"><div>Liên hệ</div></a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Contact */}
              <div className="col-lg-4 footer_col">
                <div className="footer_contact">
                  <div className="footer_title">Nhận thông tin</div>
                  <div className="newsletter">
                    <form action="#" id="newsletter_form" className="newsletter_form">
                      <input type="email" className="newsletter_input" placeholder="Để lại email" required="required" />
                      <button className="newsletter_button">+</button>
                    </form>
                  </div>
                  <div className="footer_social">
                    <div className="footer_title">Mạng xã hội</div>
                    <ul className="footer_social_list d-flex flex-row align-items-start justify-content-start">
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a></li>
                      <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                  <div className="copyright order-md-1 order-2">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Đại chỉ của hàng :  Số 1 Đại Cồ Việt, Hai Bà Chưng, Hà Nội
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                  <nav className="footer_nav ml-md-auto order-md-2 order-1">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li><a href="category.html">Thời trang nữ</a></li>
                      <li><a href="category.html">Thời trang nam</a></li>
                      <li><a href="#">Liên hệ</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
