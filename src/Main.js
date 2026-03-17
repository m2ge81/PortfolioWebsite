function Main() {
  return (
    <main id="main1">
      <section className="img1">
        <h2>More about me</h2>
        <picture id="self-portrait">
          <source srcSet={process.env.PUBLIC_URL + '/m.png'} />
          <img
            src={process.env.PUBLIC_URL + '/m.png'}
            alt="portrait"
            style={{ width: '50%' }}
          />
        </picture>
        <br />
        <p>I love seeing the ocean,</p>
        <p>going to the beach for a walk is</p>
        <p>one of my favorite hobbies, and part</p>
        <p>the reason I choose to UCSD</p>
      </section>

      <section className="video">
        <h2>Video about me!</h2>
        <video id="selfintro" controls>
          <source
            src={process.env.PUBLIC_URL + '/selfintroduction.mp4'}
            type="video/mp4"
          />
          <div className="error">Your browser does not support the video tag.</div>
        </video>
        <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
      </section>
      
      <br />
    </main>
  );
}

export default Main;