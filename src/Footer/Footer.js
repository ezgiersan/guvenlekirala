import React from "react";
import { Row, Col } from "reactstrap";
import lines from "../images/Group 7891.png";
import logo from "../images/logo.svg";
import instagram from "../images/Icon awesome-in.png";
import facebook from "../images/Icon feather-fa.png";
import linkedin from "../images/Icon feather-li.png";
import twitter from "../images/Icon feather-tw.png";
import app from "../images/Group 8007.png";
import googlePlay from "../images/Group 8006.png";
import appStore from "../images/icon_app_appsto.png";
import footerImg from "../images/Group 8004.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={8}>
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} xl={3}>
                <span className="font-size-20">Hakkımızda</span>
                <br></br>
                <img className="footer-img mb-3" src={lines}></img>
                <p className="font-size-18 mb-1">Güvenlekirala Nedir?</p>
                <p className="font-size-18 mb-1">Nasıl Kullanılır?</p>
                <p className="font-size-18">Avantajları Nelerdir?</p>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={3}>
                <span className="font-size-20">Kariyer</span>
                <br></br>
                <img className="footer-img mb-3" src={lines}></img>
                <p className="font-size-18 mb-1">Gayrimenkul Ortağı</p>
                <p className="font-size-18 mb-1">Fotoğrafçı Olmak?</p>
                <p className="font-size-18 mb-1">Ödeme ve Hizmetler</p>
                <p className="font-size-18 mb-1">Süreçler ve Sözleşmeler</p>
                <p className="font-size-18">Güvenilir Kiracı Nedir?</p>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={3}>
                <span className="font-size-20">Evinizi Kiralayın</span>
                <br></br>
                <img className="footer-img mb-3" src={lines}></img>
                <p className="font-size-18 mb-1">Evimi Nasıl Kiralarım?</p>
                <p className="font-size-18 mb-1">Ödemeler ve Vergilendirme</p>
                <p className="font-size-18 mb-1">Nasıl İyi Ev Sahibi Olunur?</p>
                <p className="font-size-18 mb-1">Kullanıcı Yorumları</p>
                <p className="font-size-18 mb-1">Bilgi Merkezi</p>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={3}>
                <span className="font-size-20">Yardım ve Destek</span>
                <br></br>
                <img className="footer-img mb-3" src={lines}></img>
                <p className="font-size-18 mb-1">Sıkça Sorulan Sorular </p>
                <p className="font-size-18 mb-1">Bilgi Merkezi </p>
                <p className="font-size-18">Destek Hattı</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <div className="d-flex">
              <div className=" ">
                <div
                  style={{
                    borderLeft: "1px solid #fff",
                    height: "150px",
                    marginRight: "2rem",
                  }}
                  className="d-none d-sm-block"
                ></div>
              </div>
              <div>
                <div className="">

                <img className="logo-footer" src={logo} alt="no img"></img>
                <span className='font-size-30 font-weight-500 ms-1'>güvenlekirala</span>
                </div>
                <p className="font-size-18 mt-4">
                  Kiramkolay Bilişim Teknolojileri A.Ş.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <img className="mx-2" src={instagram} alt="no img"></img>
              <img className="mx-2" src={facebook} alt="no img"></img>
              <img className="mx-2" src={twitter} alt="no img"></img>
              <img className="mx-2" src={linkedin} alt="no img"></img>
            </div>
            <div className="d-flex flex-wrap">
              <img className="me-1 app-img" src={app} alt="no img"></img>
              <img className="me-1 app-img" src={googlePlay} alt="no img"></img>
              <img className="mx-0 app-img" src={appStore} alt="no img"></img>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-5">
            <img
              className="logo-footer w-100"
              src={footerImg}
              alt="no img"
            ></img>
            <div className=" ">
              <div
                style={{
                  borderBottom: "1px solid #fff",
                }}
                className="d-none d-sm-block"
              ></div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span className="me-3 font-size-14">
                  © 2023 Tüm Hakları Saklıdır.
                </span>
                <span className="me-3 font-size-14 underline-text">
                  Gizlilik Politikası
                </span>
                <span className="font-size-14 underline-text">
                  Kullanım Şartları
                </span>
              </div>
              <span className="font-size-14">Versiyon: V 0.0.0.1</span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
