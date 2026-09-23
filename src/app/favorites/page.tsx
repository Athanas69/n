"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AlfredPanel, { AlfredFab } from "@/components/AlfredPanel";
import FavoriteButton from "@/components/FavoriteButton";
import { useFavorites } from "@/lib/store";
import { citySlug } from "@/lib/data";

export default function FavoritesPage() {
  const favorites = useFavorites();
  const cities = favorites.filter((f) => f.type === "city");
  const hotels = favorites.filter((f) => f.type === "hotel");

  return (
    <main>
      <Nav mode="ATLAS" />
      <section className="hero shell" style={{ paddingBottom: 20 }}>
        <div className="eyebrow">Favoris</div>
        <h1>Ce que vous avez gardé de côté.</h1>
        <p>
          {favorites.length === 0
            ? "Rien pour l’instant. Cliquez le cœur sur une ville ou un hôtel pour le retrouver ici."
            : `${favorites.length} élément${favorites.length > 1 ? "s" : ""} enregistré${favorites.length > 1 ? "s" : ""}, gardé en local sur cet appareil.`}
        </p>
      </section>

      {cities.length > 0 && (
        <section className="section shell" style={{ paddingTop: 10 }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">Destinations</div>
              <h2 style={{ fontSize: 28 }}>Villes sauvegardées</h2>
            </div>
          </div>
          <div className="destgrid">
            {cities.map((f) => (
              <Link href={`/atlas/${citySlug(f.city)}`} className="dest" key={f.id}>
                <img src={f.image} alt={f.name} />
                <div className="destcopy">
                  <h3>{f.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {hotels.length > 0 && (
        <section className="section shell" style={{ paddingTop: 10 }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">Logements</div>
              <h2 style={{ fontSize: 28 }}>Hôtels sauvegardés</h2>
            </div>
          </div>
          <div className="hotelgrid">
            {hotels.map((f) => (
              <article className="stay" key={f.id}>
                <div className="stayimg">
                  <img src={f.image} alt={f.name} />
                  <FavoriteButton className="favbtn-float" favorite={f} />
                </div>
                <div className="staybody">
                  <h3>{f.name}</h3>
                  <p className="muted">{f.city}</p>
                  <div className="staymeta">
                    <span>
                      <small>{f.meta}</small>
                    </span>
                  </div>
                  <div className="stayactions">
                    <Link href={`/atlas/${citySlug(f.city)}`} className="btn primary" style={{ gridColumn: "1/-1" }}>
                      Voir {f.city}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {favorites.length === 0 && (
        <section className="section shell" style={{ paddingTop: 0 }}>
          <Link href="/atlas/destinations" className="btn primary">
            Explorer les destinations
          </Link>
        </section>
      )}

      <Footer mode="ATLAS" />
      <AlfredFab />
      <AlfredPanel />
    </main>
  );
}
