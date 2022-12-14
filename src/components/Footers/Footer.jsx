import React, { useContext } from "react";
import { StateContext } from "../../context/Context";
import "./Footer.css";

// import FotLogo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const { navStretch } = useContext(StateContext);
  const navigate = useNavigate();
  return (
    <div className={navStretch ? " ml-240" : " ml-100"}>
      <div className="footer">
        <div className="container">
          <div className="rowGrid">
            <div className="col-6 col-lg-6 col-sm-24">
              <div className="foterLeft">
                <div className="fotLogo">
                  {/* <img src={FotLogo} alt="..." /> */}
                  <svg
                    className="logoImg"
                    width="120"
                    height="35"
                    viewBox="0 0 120 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4848_7842)">
                      <path
                        d="M16.2479 20.7767C17.0519 20.7767 17.7358 20.4999 18.2638 19.9582C18.7918 19.4285 19.0558 18.7664 19.0558 17.9478C19.0558 15.6486 18.1558 13.6022 16.3319 11.7965C14.5199 9.99087 12.3119 9.10007 9.69591 9.10007C7.06793 9.10007 4.81195 10.039 2.87998 11.9289C0.959991 13.8309 0 16.1422 0 18.8507C0 21.5592 0.959991 23.8465 2.86798 25.7482C4.77595 27.6624 7.04393 28.6132 9.70791 28.6132C12.3719 28.6132 14.4599 28.1559 15.9839 27.2409C16.8359 26.6632 17.2559 26.0011 17.2559 25.2668C17.2559 23.7982 16.2599 22.9796 15.0719 22.9796C14.4599 22.9796 13.8359 23.1962 13.1759 23.6298C12.5159 24.075 11.5319 24.2917 10.1999 24.2917C8.87993 24.2917 7.75193 23.9426 6.79193 23.2685C5.81995 22.5944 5.23195 21.7759 5.01595 20.7767H16.2479ZM12.9359 14.4449C13.8359 15.2032 14.3639 16.0338 14.5199 16.9728H5.01595C5.21995 16.0098 5.75995 15.1671 6.65995 14.4328C7.57193 13.7106 8.61593 13.3494 9.80391 13.3494C10.9919 13.3494 12.0359 13.7106 12.9359 14.4449Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M34.4043 22.6913C33.4204 23.7385 32.1843 24.2563 30.6724 24.2563C29.1724 24.2563 27.9004 23.7145 26.8924 22.6431C25.8843 21.5476 25.3685 20.2837 25.3685 18.8151C25.3685 17.3465 25.8843 16.0825 26.9164 15.0352C27.9364 13.9879 29.2083 13.4583 30.6964 13.4583C32.1843 13.4583 33.4204 13.9518 34.4043 14.963C35.3764 15.9742 35.8564 17.2381 35.8564 18.803C35.8564 20.3679 35.3764 21.644 34.4043 22.6913ZM40.3322 2.40755C40.3322 1.76956 40.0922 1.20378 39.6122 0.722267C39.1322 0.240755 38.5683 0 37.9204 0C37.2843 0 36.7204 0.240755 36.2404 0.722267C35.7604 1.20378 35.5204 1.76956 35.5204 2.40755V11.0507C34.1522 9.71451 32.4364 9.06445 30.4324 9.06445C27.8043 9.06445 25.5364 9.99138 23.6524 11.8933C21.7324 13.7953 20.7844 16.1066 20.7844 18.8151C20.7844 21.5356 21.7204 23.8469 23.5685 25.7489C25.4164 27.6628 27.6604 28.6139 30.2883 28.6139C32.2922 28.638 34.0922 27.9518 35.6643 26.5916C35.6643 27.073 35.8922 27.5304 36.3243 27.9518C36.7683 28.3973 37.2962 28.6139 37.9443 28.6139C38.5804 28.6139 39.1322 28.373 39.6122 27.9035C40.0922 27.4221 40.3322 26.8442 40.3322 26.2063V2.40755Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M48.8113 11.3747C48.8113 10.7367 48.5714 10.1589 48.0914 9.6894C47.6114 9.20787 47.0474 8.96713 46.4114 8.96713C45.7632 8.96713 45.1993 9.20787 44.7193 9.6894C44.2393 10.1589 43.9993 10.7367 43.9993 11.3747V18.7779C43.9993 21.4864 44.9832 23.7737 46.9032 25.6755C48.8353 27.5775 51.1872 28.5286 53.9113 28.5286C56.6472 28.5286 58.9753 27.5896 60.9072 25.6997C62.8151 23.8218 63.7751 21.5225 63.7751 18.7779V11.3747C63.7751 10.7126 63.5351 10.1468 63.0551 9.66531C62.5751 9.20787 62.0111 8.96713 61.3632 8.96713C60.7272 8.96713 60.1632 9.20787 59.6832 9.6894C59.2032 10.1589 58.9632 10.7367 58.9632 11.3747V18.7779C58.9632 20.2706 58.4832 21.5225 57.5111 22.5698C56.5392 23.6172 55.3513 24.1348 53.8993 24.1348C52.4472 24.1348 51.2353 23.6172 50.2632 22.5698C49.2914 21.5225 48.8113 20.2706 48.8113 18.7779V11.3747Z"
                        fill="#1C1C1C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M81.9104 3.61118H104.806C113.158 3.61118 119.998 10.4607 119.998 18.851C119.998 27.2293 113.158 34.0909 104.806 34.0909H81.9104C73.5585 34.0909 66.7185 27.2293 66.7185 18.851C66.7185 10.4607 73.5585 3.61118 81.9104 3.61118ZM89.1948 11.9055C87.2869 10.0035 84.9229 9.07663 82.1869 9.07663C79.439 9.07663 77.099 10.0035 75.179 11.8814C73.2471 13.7834 72.299 16.0826 72.299 18.8152C72.299 21.5478 73.2471 23.8591 75.1669 25.7611C77.0629 27.675 79.4029 28.6261 82.1629 28.6261C84.9229 28.6261 87.2869 27.675 89.1948 25.737C91.1148 23.8229 92.0748 21.5117 92.0748 18.8152C92.0748 16.1187 91.1148 13.8075 89.1948 11.9055ZM85.9548 22.6553C84.9469 23.7266 83.675 24.2684 82.1869 24.2684C80.699 24.2684 79.4269 23.7266 78.419 22.6553C77.399 21.5598 76.8829 20.2959 76.8829 18.8272C76.8829 17.3586 77.399 16.0947 78.4311 15.0474C79.4629 14.0001 80.7108 13.4704 82.199 13.4704C83.699 13.4704 84.9469 14.0001 85.9548 15.0474C86.9748 16.0947 87.479 17.3586 87.479 18.8272C87.479 20.2959 86.9748 21.5598 85.9548 22.6553ZM109.463 26.2306C109.463 26.8684 109.691 27.4343 110.183 27.9159C110.651 28.3973 111.227 28.638 111.863 28.638C112.499 28.638 113.075 28.3973 113.555 27.9159C114.035 27.4343 114.275 26.8684 114.275 26.2306V18.8152C114.275 16.1187 113.291 13.8075 111.371 11.9055C109.439 10.0035 107.087 9.07663 104.363 9.07663C101.627 9.07663 99.2869 10.0035 97.3787 11.8814C95.4587 13.7834 94.4987 16.0826 94.4987 18.8152V26.2306C94.4987 26.8925 94.7387 27.4464 95.2187 27.9159C95.6987 28.3973 96.2627 28.638 96.9108 28.638C97.5469 28.638 98.1108 28.3973 98.5908 27.9159C99.0708 27.4343 99.3108 26.8684 99.3108 26.2306V18.8152C99.3108 17.3346 99.7908 16.0826 100.763 15.0353C101.735 13.9881 102.947 13.4704 104.387 13.4704C105.839 13.4704 107.039 13.9881 108.011 15.0353C108.983 16.0826 109.463 17.3346 109.463 18.8152V26.2306Z"
                        fill="#006AFF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4848_7842">
                        <rect width="120" height="34.0909" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Bizni ijtimoiy tarmoqlarda kuzating</p>
                <div className="networks">
                  <a href="https://www.instagram.com/eduon.uz/">
                    <svg
                      className="network pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.72">
                        <path
                          d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.739 4.558 5.426 4.759 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.259 19.442 18.574 19.241 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                          fill="#006AFF"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="https://t.me/eduonplatform">
                    <svg
                      className="network pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.72">
                        <path
                          d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L6.392 12.391C5.852 12.226 5.849 11.854 6.513 11.587L16.246 7.827C16.811 7.597 17.131 7.888 16.948 8.617L15.291 16.437C15.175 16.994 14.84 17.127 14.375 16.87L11.824 14.982L10.635 16.13C10.513 16.248 10.414 16.349 10.226 16.374C10.039 16.4 9.885 16.344 9.772 16.034L8.902 13.163L8.89 13.171V13.17Z"
                          fill="#006AFF"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/eduon.uz">
                    <svg
                      className="network pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.72">
                        <path
                          d="M13 19.938C15.0173 19.6813 16.8611 18.6661 18.1568 17.0988C19.4525 15.5314 20.1027 13.5295 19.9754 11.5C19.848 9.47041 18.9527 7.56549 17.4713 6.17238C15.9898 4.77927 14.0336 4.00252 12 4C9.96396 3.99848 8.00395 4.77334 6.51934 6.16668C5.03473 7.56002 4.13724 9.46699 4.00974 11.499C3.88225 13.5311 4.53434 15.5353 5.83314 17.1033C7.13195 18.6712 8.97974 19.685 11 19.938V14H9V12H11V10.346C11 9.009 11.14 8.524 11.4 8.035C11.6561 7.55119 12.052 7.15569 12.536 6.9C12.918 6.695 13.393 6.572 14.223 6.519C14.552 6.498 14.978 6.524 15.501 6.599V8.499H15C14.083 8.499 13.704 8.542 13.478 8.663C13.3431 8.73236 13.2334 8.84215 13.164 8.977C13.044 9.203 13 9.427 13 10.345V12H15.5L15 14H13V19.938ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                          fill="#006AFF"
                        />
                      </g>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCNZnKdztXGm09bqvcCE60nw">
                    <svg
                      className="network pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.72">
                        <path
                          d="M19.606 6.995C19.53 6.697 19.314 6.472 19.067 6.403C18.63 6.28 16.5 6 12 6C7.5 6 5.372 6.28 4.931 6.403C4.687 6.471 4.471 6.696 4.394 6.995C4.285 7.419 4 9.196 4 12C4 14.804 4.285 16.58 4.394 17.006C4.47 17.303 4.686 17.528 4.932 17.596C5.372 17.72 7.5 18 12 18C16.5 18 18.629 17.72 19.069 17.597C19.313 17.529 19.529 17.304 19.606 17.005C19.715 16.581 20 14.8 20 12C20 9.2 19.715 7.42 19.606 6.995ZM21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5V8.5L16 12L10 15.5Z"
                          fill="#006AFF"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-6 col-sm-12">
              <div className="webSite">
                <ul>
                  <h1 className="pageName">Veb sayt</h1>
                  <li className="pointer" onClick={() => navigate("/")}>
                    Bosh sahifa
                  </li>
                  <li className="pointer" onClick={() => navigate("/")}>
                    Kurslar
                  </li>
                  <li className="pointer" onClick={() => navigate("/faq")}>
                    FAQ
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-6 col-sm-12">
              <div className="webSite">
                <ul>
                  <h1 className="pageName">Ma???lumotlar</h1>
                  <li
                    className="pointer"
                    onClick={() => navigate("/aboutEduon")}
                  >
                    Biz haqimizda
                  </li>
                  <li className="pointer">Foydalanish shartlari</li>
                  <li className="pointer">Maxfiylik va siyosat</li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-6 col-sm-24">
              <div className="address">
                <h1 className="pageName">Manzillar</h1>
                <p>
                  Toshkent sh. Yakkasaroy t. Shota <br />
                  Rustaveli 1-tor ko'chasi, 6-uy
                </p>
                <p>+998 99 702 00 88</p>
                <p>Info@eduon.uz</p>
              </div>
            </div>
          </div>
        </div>
        <p className="fotLink">
          ?? <a href="#!"> EduOn</a>. Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
  );
}

export default Footer;
