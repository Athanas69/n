import NotifyButton from "@/components/NotifyButton";

export default function JoinTripPage() {
  return (
    <>
      <section className="hero shell" style={{ paddingBottom: 10 }}>
        <div className="eyebrow">Demander à rejoindre</div>
        <h1>Japon en octobre.</h1>
        <p>Présentez-vous à l’organisateur. La messagerie privée s’ouvre après validation.</p>
      </section>
      <section className="section shell" style={{ paddingTop: 10 }}>
        <div className="creategrid">
          <article className="formcard">
            <h2>Votre message</h2>
            <textarea
              className="field"
              style={{ width: "100%", minHeight: 150, border: 0 }}
              defaultValue="Salut ! Je cherche justement un voyage au Japon en octobre. J’aime la food et la culture, le rythme me convient et le budget aussi."
            />
            <NotifyButton className="btn primary" message="Demande envoyée à l’organisateur.">
              Envoyer la demande
            </NotifyButton>
          </article>
          <aside className="formcard" style={{ background: "var(--green2)" }}>
            <div className="eyebrow">Règle Mondo</div>
            <h2>Discuter avant de décider.</h2>
            <p className="muted">
              L’organisateur peut accepter, refuser ou ouvrir une courte discussion avant de décider.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
