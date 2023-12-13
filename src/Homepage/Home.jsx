import "./Home.css";
export function Home() {
  return (
    <div className="home">
      <div className="side">
        <ul>
          <li className="home-items">
            <img src="home.png" alt="" />
            Home
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-notification-basic-anggara-basic-outline-anggara-putra-2.png"
              alt="external-notification-basic-anggara-basic-outline-anggara-putra-2"
            />
            Notification
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/windows/32/hearts.png"
              alt="hearts"
            />
            Shop
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/badges/48/comments.png"
              alt="comments"
            />
            Conversation
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/wallet--v1.png"
              alt="wallet--v1"
            />
            Wallet
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/puffy/32/experimental-video-playlist-puffy.png"
              alt="experimental-video-playlist-puffy"
            />
            subscription
          </li>
          <li className="home-items">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah"
            />
            Myprofile
          </li>
          <li className="home-items" ><img width="24" height="24" src="https://img.icons8.com/ios/50/apple-settings.png" alt="apple-settings"/>Settings</li>
        </ul>
      </div>
    </div>
  );
}
