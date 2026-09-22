import { members, memberColor } from "@/lib/members";

export default function MemberGrid() {
  return (
    <div className="membergrid">
      {members.map((m, i) => (
        <article className="membercard" key={m.name}>
          <div className="memberhead">
            <span className="memberavatar" style={{ background: memberColor(i) }}>
              {m.initials}
            </span>
            <div>
              <h3>{m.name}</h3>
              <small className="muted">{m.location}</small>
            </div>
          </div>
          <p>{m.bio}</p>
          <div className="hoodtags">
            {m.interests.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="membertrust">
            <span>
              <b>{m.trips}</b> voyages
            </span>
            <span>
              <b>★ {m.rating}</b> ({m.reviews} avis)
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
