import Container from "../components/StyledElements/Container";

const ArtistDashboard = () => {
  return (
    <Container>
      <header>
        <h2>Welcome Artist! This is your dashboard.</h2>
      </header>

      <div className="column-1">
        <div className="first-steps">
          <p>First Step: </p>
          <button>Add an album</button>
          <button>or add a track</button>
        </div>
        <div className="activity">
          Once word gets out that you're here, this is where you'll see
          notifications of sales and followers. To make that happen, go read our
          Artist Guide.
        </div>
      </div>

      <div className="column-2">
        <div className="followers">
          No followers, but just you wait! This is where you'll see your
          followers. We notify them when you release new music or merch, so the
          more followers you have, the more sales you can expect.
        </div>
        <div className="plays">
          The site of your future plays Add your music and we'll start showing
          your plays here.
        </div>
        <div className="sales">
          Cha-ching! Add your music and merch and we'll start showing your sales
          here.
        </div>
      </div>
    </Container>
  );
};

export default ArtistDashboard;

/* <div className="band">
  Get monthly updates on your sales and followers, plus tips for
  making the most of Bandcamp. Click here to opt in.
</div> */
