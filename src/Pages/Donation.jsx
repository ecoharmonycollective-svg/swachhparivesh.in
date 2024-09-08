import "./styles/donation.css";
import { useState } from "react";
import UPIQR from "../assets/SPF_QR.png";
import HappyGirls from "../assets/happy_girls.webp";
import BodyHelmet from "../Components/BodyHelmet";
import HelmetData from "../import/BodyHelmet";
export default function Donation() {
  const [activeTab, setActiveTab] = useState("bank");
  return (
    <>
      <BodyHelmet
        title={HelmetData.mediaPage.title}
        description={HelmetData.mediaPage.description}
        keywords={HelmetData.mediaPage.keywords}
      />
      <div className="donation row">
        <div className="donation__item donation__banner">
          <img className="donation__girls" src={HappyGirls} alt="" />
          <div className="donation__banner__content"></div>
        </div>
        <div className="donation__item col cent">
          <div className="donation__tab row">
            <div
              className={
                "inner__tab " + (activeTab === "bank" ? "active__tab" : "")
              }
              onClick={() => setActiveTab("bank")}
            >
              Bank Details
            </div>
            <div
              className={
                "inner__tab " + (activeTab === "qr" ? "active__tab" : "")
              }
              onClick={() => setActiveTab("qr")}
            >
              QR Payment
            </div>
          </div>
          <div className="payment__item">
            {activeTab === "bank" ? (
              <div className="bank__details__item">
                <div className="bank__label">
                  <p>UPI ID:</p>
                  <p className="bank__input">swach97600@barodampay</p>
                </div>
                <div className="bank__label">
                  <p>Account Holder&apos;s Name:</p>
                  <p>SWACH PARIVESH FOUNDATION</p>
                </div>
                <div className="bank__label">
                  <p>Bank Name:</p>
                  <p className="bank__input">Bank of Baroda</p>
                </div>
                <div className="bank__label">
                  <p>Account Number:</p>
                  <p className="bank__input">58930100002634</p>
                </div>
                <div className="bank__label">
                  <p>IFSC Code:</p>
                  <p className="bank__input">BARB0AJABPU</p>
                </div>
                <div className="bank__label">
                  <p>Branch:</p>
                  <p className="bank__input">AJABPUR KALAN</p>
                </div>
              </div>
            ) : (
              <div className="qr__code__container cent">
                <img className="qr__code" src={UPIQR} alt="UPI QR Code" />
              </div>
            )}
          </div>
          <div className="cent">
            <p className="donation__tax">
              Your donation is exempt from tax in India under Section 80G of the
              Income Tax Act. To receive your receipt, please contact us at{" "}
              <a href="mailto:donate@swachhparivesh.com">
                donate@swachhparivesh.com
              </a>{" "}
              or call us at <a href="tel:+919639002477">+91 9639002477</a>.
            </p>
          </div>
        </div>
      </div>

      {/* 
      <div className="donation__banner cent">
        <div className="banner__item col cent">
          <h1 className="support__header">
            Support Our Cause || Make Some Difference
          </h1>
          <p className="support__para">
            Thank you for considering a donation to Swach Parivesh Foundation.
            Your support will help us to continue our work to protect the
            environment and make a difference in the lives of people. We are a
            non-profit organization and your donation is tax-deductible.
          </p>
        </div>
      </div>
      </div> */}
    </>
  );
}
