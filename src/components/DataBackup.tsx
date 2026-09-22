"use client";

import { useRef, useState } from "react";
import { exportBackup, importBackup, type Backup } from "@/lib/store";

export default function DataBackup() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  function handleExport() {
    const backup = exportBackup();
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mondo-atlas-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportClick() {
    fileRef.current?.click();
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result)) as Backup;
        if (data.version !== 1) throw new Error("format inconnu");
        importBackup(data);
        setMessage("Sauvegarde restaurée avec succès.");
      } catch {
        setMessage("Ce fichier n’est pas une sauvegarde Mondo × Atlas valide.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  return (
    <div className="profilecard">
      <h2>Sauvegarde</h2>
      <p className="muted" style={{ fontSize: 12 }}>
        Vos voyages, favoris et profil sont enregistrés uniquement dans ce navigateur, sur cet appareil. Exportez
        une sauvegarde pour ne rien perdre en cas de nettoyage du navigateur ou pour les transférer sur un autre
        appareil.
      </p>
      <div className="actions" style={{ marginTop: 12 }}>
        <button className="btn" onClick={handleExport}>
          Exporter mes données
        </button>
        <button className="btn" onClick={handleImportClick}>
          Importer une sauvegarde
        </button>
        <input ref={fileRef} type="file" accept="application/json" onChange={handleFile} style={{ display: "none" }} />
      </div>
      {message && (
        <p className="muted" style={{ fontSize: 11, marginTop: 8 }}>
          {message}
        </p>
      )}
    </div>
  );
}
