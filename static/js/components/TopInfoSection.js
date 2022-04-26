const TopInfoSection = () => {
  return (
    <div className="container">
      <div className="row justify-content-between mt-3">
        <div className="col-md-6 top-holder">
          <h1 className="page-title">BevalinDAO Staking Mechanism</h1>
          <p className="subtitle">
            Welcome to the BevalinDAO Club! Get your Apes into the Club and you
            will be rewarded every 12 hours with $BVLN
          </p>
          <p className="primary-text">
            Stake your Apes Of Bevalin NFT to earn $BVLN - Utility Token for the
            BevalinVerse + ... The story will be written by you.
          </p>
          <div className="d-flex flex-wrap align-items-center gap-3 my-4 social-holder">
            <a href="https://twitter.com/BevalinDAOi" target="_blank">
              <img src="/assets/images/twitter.png" height="45" />
            </a>
            <a href="https://discord.gg/jvXxSgP3" target="_blank">
              <img src="/assets/images/discord.png" height="45" />
            </a>
            <a href="https://opensea.io/collection/bevalindao" target="_blank">
              <img src="/assets/images/opensea.png" height="45" />
            </a>
            <a
              href="https://polygonscan.com/token/0x0743237C934d65B406841fD62028bE613Adf77A0"
              target="_blank"
            >
              <img src="/assets/images/matic.svg" height="45" />
            </a>
          </div>
        </div>
        <div className="col-md-6 logo-holder">
          <img src="/assets/images/blid.jpg" className="blid-image" />
        </div>
      </div>
    </div>
  );
};

export default TopInfoSection;
