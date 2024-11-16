import "./footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <svg
        width="122"
        height="41"
        viewBox="0 0 122 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer__logo"
      >
        <path
          d="M11.6445 20.979L5.12785 27.6426V36.9932H0V0.880615H5.12785V21.0864L24.5709 0.880615H30.4466L15.1699 17.1098L31.5149 36.9932H25.5324L11.6445 20.979Z"
          fill="white"
        />
        <path
          d="M68.9054 34.0913L70.9352 30.2221C73.2854 31.8343 76.9177 33.0166 80.4431 33.0166C85.0367 33.0166 86.8529 31.6193 86.8529 29.2548C86.8529 23.1286 69.6532 28.395 69.6532 17.5397C69.6532 12.5958 74.0332 9.37143 80.9772 9.37143C84.5026 9.37143 88.5621 10.3387 90.9124 11.8434L88.7758 15.7126C86.3187 14.1005 83.648 13.5631 80.9772 13.5631C76.704 13.5631 74.5674 15.1752 74.5674 17.3248C74.5674 23.7735 91.767 18.507 91.767 29.1474C91.767 34.0913 87.2802 37.2082 80.0157 37.2082C75.6357 37.3157 71.1488 35.9185 68.9054 34.0913Z"
          fill="white"
        />
        <path
          d="M122 20.4415V36.9931H117.299V33.3388C115.697 35.8108 112.599 37.208 108.326 37.208C102.13 37.208 98.2837 33.8762 98.2837 29.1472C98.2837 24.7406 101.061 21.1938 109.18 21.1938H116.979V20.2265C116.979 16.0349 114.522 13.6704 109.715 13.6704C106.51 13.6704 103.198 14.8526 101.061 16.5723L99.0315 12.8106C101.809 10.5535 105.869 9.26379 110.249 9.26379C117.834 9.37127 122 13.0255 122 20.4415ZM117.086 28.6098V24.7406H109.501C104.587 24.7406 103.198 26.6752 103.198 28.9322C103.198 31.6192 105.441 33.3388 109.18 33.3388C112.919 33.4463 115.911 31.8341 117.086 28.6098Z"
          fill="white"
        />
        <path
          d="M53.0946 29.7924V37.1009L56.1927 35.2738V27.9653L53.0946 29.7924Z"
          fill="white"
        />
        <path
          d="M61.641 20.8716L48.9282 13.4556L41.8774 9.37143L34.9335 21.5164L35.0403 32.9091L47.6463 40.325L48.9282 39.5727V28.8249L54.5902 18.8295L60.359 22.1613V32.9091L61.641 32.1567V20.8716Z"
          fill="white"
        />
      </svg>
      <p className="footer__text">© {year} Kasa. All rights reserved</p>
    </footer>
  );
}